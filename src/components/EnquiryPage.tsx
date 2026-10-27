import { Brand } from './Brand';
import { EnquiryForm } from './EnquiryForm';
import { getEnquiryConfig } from '@/lib/server/enquiry-config';
import type { Audience } from '@/lib/enquiries/validation';

export function EnquiryPage({ audience }: { audience: Audience }) {
  const config = getEnquiryConfig();
  return <main className="wrap enquiry-page"><Brand />
    <div className="eyebrow">{audience === 'creator' ? 'Voor creators & modellen' : 'Voor restaurants, cafés & bars'}</div>
    <h1>{audience === 'creator' ? 'Laat je stijl zien.' : 'Laten we kennismaken.'}</h1>
    <p className="enquiry-intro">{audience === 'creator' ? 'Interesse als creator' : 'Interesse als horecazaak'}</p>
    <EnquiryForm audience={audience} provisional={!config.formsApproved || !config.privacyUrl} sendingEnabled={config.enabled} />
    {config.privacyUrl && <p className="form-privacy"><a href={config.privacyUrl}>Privacyinformatie</a></p>}
    <a className="textlink" href="/#meedoen">Terug naar GetIt <span aria-hidden="true">↗</span></a>
  </main>;
}
