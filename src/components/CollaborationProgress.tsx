const stages = [
  { label: 'Bezoek afgerond', detail: 'De ervaring beleefd' },
  { label: 'Concept ingeleverd', detail: 'Content klaar voor GetIt' },
  { label: 'Conceptcontrole', detail: 'GetIt keurt goed of vraagt aanpassingen' },
  { label: 'Publiceren', detail: 'Alleen na goedkeuring door GetIt' },
  { label: 'Publicatiebewijs', detail: 'Creator levert de publicatielinks aan' },
  { label: 'Bewijscontrole', detail: 'GetIt beoordeelt het bewijs apart' },
  { label: 'Samenwerking afgerond', detail: 'Na akkoord op het bewijs · 1 credit besteed' },
];

export function CollaborationProgress() {
  return <div className="collaboration-progress">
    <div className="journey-heading"><strong>Concept in beoordeling</strong><span>2 van 7 afgerond</span></div>
    <progress value={2} max={7} aria-label="Fictieve samenwerking: twee van zeven stappen afgerond" />
    <ol className="journey-stages" aria-label="Van bezoek tot afronding">
      {stages.map((stage, index) => <li key={stage.label} className={index < 2 ? 'done' : index === 2 ? 'current' : ''} aria-current={index === 2 ? 'step' : undefined}>
        <span className="journey-marker" aria-hidden="true">{index < 2 ? '✓' : index + 1}</span>
        <div><strong>{stage.label}</strong><small>{stage.detail}</small></div>
      </li>)}
    </ol>
  </div>;
}
