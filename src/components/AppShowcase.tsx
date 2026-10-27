import Image from 'next/image';
import { PhoneCarousel } from './PhoneCarousel';

export function AppShowcase() {
  return (<section aria-label="Zo werkt het" className="app-showcase wrap" id="hoe">
<div className="app-heading">
<div className="eyebrow">In de GetIt-app</div>
<h2>Van ontdekking<br />tot gedeeld verhaal.</h2>
<p>Ontdek. Vraag aan. Volg je samenwerking.</p>
</div>
<PhoneCarousel>
<figure className="phone-slide" role="group" aria-roledescription="dia" aria-labelledby="phone-caption-1" aria-describedby="app-fiction-note">
<div className="device">
<div className="island">
</div>
<div className="device-brand">GetIt [•]<span>≡</span>
</div>
<h3>Ontdek Amsterdam</h3>
<div className="mini-chips">
<span>Alle</span>
<span>Restaurant</span>
<span>Café</span>
<span>Bar</span>
</div>
<Image loading="lazy" src="/images/venue.jpg" alt="Sfeervol restaurant in een concept-appscherm"  width={1100} height={733} sizes="(max-width: 650px) 260px, (max-width: 950px) 30vw, 260px" />
<div className="mini-title">Diner voor twee</div>
<small>Amsterdam · Restaurant</small>
<div className="mini-box">Een avond om te delen.</div>
<span className="mini-action">Bekijk ervaring →</span>
</div>
<figcaption id="phone-caption-1">
<span>01</span>Ontdek jouw plek</figcaption>
</figure>
<figure className="phone-slide" role="group" aria-roledescription="dia" aria-labelledby="phone-caption-2" aria-describedby="app-fiction-note">
<div className="device">
<div className="island">
</div>
<div className="device-brand">GetIt [•]<span>≡</span>
</div>
<Image loading="lazy" src="/images/dining.jpg" alt="Diner als voorbeeld van een ervaring"  width={1400} height={933} sizes="(max-width: 650px) 260px, (max-width: 950px) 30vw, 260px" />
<div className="mini-title">Diner voor twee</div>
<small>Fictief aanbod · Amsterdam</small>
<div className="mini-box">
<strong>Dit ontvang je</strong>Een diner voor twee</div>
<div className="mini-box">
<strong>Dit maak je</strong>1 Reel + 2 stories, met afgesproken tags</div>
<span className="mini-action">Vraag aan →</span>
<small>De venue bevestigt je aanvraag.</small>
</div>
<figcaption id="phone-caption-2">
<span>02</span>Bekijk de afspraken</figcaption>
</figure>
<figure className="phone-slide" role="group" aria-roledescription="dia" aria-labelledby="phone-caption-3" aria-describedby="app-fiction-note">
<div className="device">
<div className="island">
</div>
<div className="device-brand">GetIt [•]<span>≡</span>
</div>
<h3>Mijn samenwerking</h3>
<div className="mini-box">
<strong>Een diner voor twee</strong>Amsterdam · Restaurant</div>
<div className="mini-status">
<strong>✓ Bezoek bevestigd</strong>
<small>Vrijdag · 19:00</small>
</div>
<ol className="mini-stage">
<li>Bezoek afgerond</li>
<li>Creator levert concept aan</li>
<li>GetIt keurt goed of vraagt aanpassingen</li>
<li>Creator publiceert na akkoord</li>
<li>Creator levert publicatiebewijs aan</li>
<li>GetIt beoordeelt het bewijs apart</li>
<li>Samenwerking afgerond</li>
</ol>
<span className="mini-action">Bekijk samenwerking →</span>
</div>
<figcaption id="phone-caption-3">
<span>03</span>Volg de volgende stap</figcaption>
</figure>
</PhoneCarousel>
<p id="app-fiction-note" className="app-note">Conceptbeelden · fictief aanbod</p>
</section>);
}

