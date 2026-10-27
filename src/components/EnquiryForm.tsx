'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { fieldsFor, validateEnquiry, type Audience, type FieldErrors, type FieldName } from '@/lib/enquiries/validation';

export function EnquiryForm({ audience, provisional, sendingEnabled }: { audience: Audience; provisional: boolean; sendingEnabled: boolean }) {
  const fields = fieldsFor(audience);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState('');
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ready, setReady] = useState(false);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const requestKey = useRef<string | undefined>(undefined);

  useEffect(() => { setReady(true); }, []);
  useEffect(() => { if (message || success) feedbackRef.current?.focus(); }, [message, errors, success]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const formData = new FormData(event.currentTarget);
    const input = { audience, ...Object.fromEntries(formData.entries()) };
    const result = validateEnquiry(input);
    setErrors({});
    setMessage('');
    if (!result.ok) {
      setErrors(result.errors);
      setMessage('Controleer de aangegeven velden.');
      return;
    }
    setPending(true);
    requestKey.current ??= crypto.randomUUID();
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Idempotency-Key': requestKey.current },
        body: JSON.stringify(input),
        signal: AbortSignal.timeout(15000),
      });
      const payload = await response.json();
      if (response.ok && payload.ok === true) {
        setSuccess(true);
      } else {
        setErrors(payload.errors && typeof payload.errors === 'object' ? payload.errors : {});
        setMessage(typeof payload.message === 'string' ? payload.message : 'Versturen is niet gelukt. Probeer opnieuw.');
      }
    } catch {
      setMessage('Versturen is niet gelukt. Controleer je verbinding en probeer opnieuw. Je gegevens blijven staan.');
    } finally { setPending(false); }
  }

  if (success) return <div className="form-feedback form-success" ref={feedbackRef} tabIndex={-1} role="status"><h2>Bedankt voor je interesse.</h2><p>Je bericht is verstuurd naar GetIt.</p></div>;

  return (
    <>
      <div className="form-notice" id="enquiry-notice">
        {provisional
          ? 'Voorlopig formulier voor lokale beoordeling. De velden en privacyinformatie zijn nog niet bevestigd. Er wordt niets verstuurd. Gebruik alleen voorbeeldgegevens.'
          : !sendingEnabled ? 'Versturen is nog niet beschikbaar. Gebruik deze lokale versie alleen met voorbeeldgegevens.' : 'Velden met een * zijn verplicht.'}
      </div>
      <noscript><p>Schakel JavaScript in om dit formulier te gebruiken.</p></noscript>
      <form method="post" action="/api/enquiries" noValidate onSubmit={submit} aria-describedby="enquiry-notice" aria-busy={pending} onChange={event => {
        requestKey.current = undefined;
        const target = event.target;
        if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return;
        const name = target.name as FieldName;
        setErrors(previous => { const next = { ...previous }; delete next[name]; return next; });
      }}>
        {message && <div className="form-feedback" ref={feedbackRef} tabIndex={-1} role="alert"><p>{message}</p><ul>{Object.entries(errors).map(([name, text]) => <li key={name}>{name === '_form' ? text : <a href={`#enquiry-${name}`}>{fields.find(field => field.name === name)?.label}: {text}</a>}</li>)}</ul></div>}
        <fieldset disabled={pending}>
          <legend className="sr-only">{audience === 'creator' ? 'Interesse als creator' : 'Interesse als horecazaak'}</legend>
          {fields.map(field => {
            const id = `enquiry-${field.name}`;
            return <div className="form-field" key={field.name}>
              <label htmlFor={id}>{field.label}{field.required ? <span aria-hidden="true"> *</span> : ' (optioneel)'}</label>
              {field.type === 'textarea'
                ? <textarea id={id} name={field.name} rows={5} maxLength={field.maxLength} aria-invalid={!!errors[field.name]} aria-describedby={errors[field.name] ? `${id}-error` : undefined} />
                : <input id={id} name={field.name} type={field.type} required={field.required} maxLength={field.maxLength} autoComplete={field.autoComplete} autoCapitalize={field.type === 'email' || field.type === 'url' ? 'none' : undefined} spellCheck={field.type === 'email' || field.type === 'url' ? false : undefined} aria-invalid={!!errors[field.name]} aria-describedby={errors[field.name] ? `${id}-error` : undefined} />}
              {errors[field.name] && <p className="field-error" id={`${id}-error`}>{errors[field.name]}</p>}
            </div>;
          })}
          <div className="form-honeypot" aria-hidden="true"><label htmlFor="fax-number">Laat dit veld leeg</label><input id="fax-number" name="faxNumber" tabIndex={-1} autoComplete="off" /></div>
          <button className="btn" type="submit" disabled={!ready || pending}>{pending ? 'Even geduld…' : sendingEnabled ? 'Verstuur interesse' : 'Controleer voorbeeldgegevens'}</button>
        </fieldset>
        <p className="form-pending" role="status" aria-live="polite">{pending ? 'Je formulier wordt verwerkt. Sluit deze pagina nog niet.' : ''}</p>
      </form>
    </>
  );
}
