import Image from 'next/image';
import { Brand } from "./Brand";

export function Header() {
  return (<header className="topbar" id="top">
<nav className="wrap" aria-label="Hoofdnavigatie">
<Brand />
<div className="navlinks">
<a href="#creators">Voor creators</a>
<a href="#venues">Voor venues</a>
<a href="#hoe">Zo werkt het</a>
<a className="btn small" href="#meedoen">Laat je interesse weten <span className="arrow">↗</span>
</a>
</div>
</nav>
</header>);
}

export function Hero() {
  return (<section aria-label="Introductie" className="hero">
<div className="wrap">
<div className="hero-grid">
<div className="hero-copy">
<div className="eyebrow">
<span className="dot">
</span> Good things. Worth sharing.</div>
<h1>Mooie plekken.<br />Echte makers.<br />
<em>Goede klik.</em>
</h1>
<p>Bijzondere horeca ontmoet geselecteerde makers. Een mooie ervaring, in ruil voor content.</p>
<div className="buttons">
<a className="btn" href="#creators">Ik ben creator <span className="arrow">↗</span>
</a>
<a className="btn light" href="#venues">Voor mijn horecazaak <span className="arrow">↗</span>
</a>
</div>
</div>
<div className="herovisual hero-editorial">
<div className="hero-photo-frame">
<Image className="heroimg" src="/images/dining.jpg" alt="Een sfeervolle tafel in een restaurant"  preload width={1400} height={933} sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 1338px) 50vw, 613px" />
<Image className="smallimg" src="/images/creator.jpg" alt="Portret als sfeerbeeld van een creator"  loading="lazy" width={900} height={1350} sizes="(max-width: 650px) 96px, 126px" />
</div>
<div className="experience-note">
<small>Van ervaring naar verhaal</small>
<strong>Een plek die je wilt delen.</strong>
</div>
</div>
</div>
</div>
</section>);
}

export function BrandStrip() {
  return (<section aria-label="Goede makers en passende plekken" className="strip">
<div className="wrap">
<p>Goede makers. Passende plekken.</p>
</div>
</section>);
}

export function AudienceCards() {
  return (<section aria-label="Voor creators en horecazaken" className="intro wrap">
<div className="audiences">
<article className="audience" id="creators">
<div className="photo">
<Image src="/images/creator.jpg" alt="Creatief portret als sfeerbeeld" loading="lazy" style={{ objectPosition: "center 32%" }}  width={900} height={1350} sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 1338px) 50vw, 613px" />
<span className="label">Voor creators & modellen</span>
</div>
<div className="audience-body">
<h2>Jouw volgende verhaal<br />begint hier.</h2>
<p>Ontdek jouw plek. Maak content in je eigen stijl.</p>
<a className="textlink" href="#hoe">Zo werkt het <span>↗</span>
</a>
</div>
</article>
<article className="audience" id="venues">
<div className="photo">
<Image src="/images/venue.jpg" alt="Een sfeervolle horecazaak als voorbeeld van een partnerlocatie" loading="lazy"  width={1100} height={733} sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 1338px) 50vw, 613px" />
<span className="label">Voor restaurants, cafés & bars</span>
</div>
<div className="audience-body">
<h2>Jouw plek.<br />Door de juiste ogen.</h2>
<p>Ontvang passende makers. Jij kiest wie, wat en wanneer.</p>
<a className="textlink" href="#hoe">Zo werkt het <span>↗</span>
</a>
</div>
</article>
</div>
</section>);
}

export function Editorial() {
  return (<section aria-label="De juiste mensen" className="editorial">
<div className="wrap editorial-grid">
<Image src="/images/cafe.jpg" alt="Een warm café waar mensen samenkomen" loading="lazy"  width={1100} height={754} sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 1338px) 50vw, 613px" />
<div>
<div className="eyebrow">De juiste mensen</div>
<h2>Een eigen blik.<br />Een goede match.</h2>
<p>Geselecteerd op stijl, kwaliteit en betrouwbaarheid.</p>
</div>
</div>
</section>);
}

export function ExampleExperience() {
  return (<section aria-label="Fictief voorbeeld" className="experience wrap" id="voorbeelden">
<div className="sectiontitle">
<div>
<div className="eyebrow">Even concreet</div>
<h2>Een diner.<br />Een eigen verhaal.</h2>
</div>
</div>
<article className="example">
<div className="example-photo">
<Image src="/images/dining.jpg" alt="Diner als fictief voorbeeld" loading="lazy"  width={1400} height={933} sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 1338px) 50vw, 613px" />
<span>Fictief voorbeeld · geen boekbaar aanbod</span>
</div>
<div className="example-body">
<div className="eyebrow">Restaurant · Amsterdam</div>
<h3>Een avond<br />om te delen.</h3>
<div className="example-row">
<strong>De ervaring</strong>
<span>Diner voor twee, volgens afspraak.</span>
</div>
<div className="example-row">
<strong>De content</strong>
<span>Eén Reel en twee stories, met afgesproken tags.</span>
</div>
<div className="example-row">
<strong>De regie</strong>
<span>Venue bevestigt. GetIt beoordeelt vóór publicatie en controleert het bewijs.</span>
</div>
<div className="example-row">
<strong>Het gebruik</strong>
<span>Herplaatsen en advertenties: apart afspreken.</span>
</div>
</div>
</article>
</section>);
}

export function FAQ() {
  return (<section aria-label="Veelgestelde vragen" className="faq wrap">
<div>
<div className="eyebrow">Goed om te weten</div>
<h2>Nog even dit.</h2>
</div>
<div>
<details>
<summary>Voor wie is GetIt bedoeld?</summary>
<p>Voor geselecteerde modellen, creators en horecazaken in Amsterdam.</p>
</details>
<details>
<summary>Moet ik als creator betalen?</summary>
<p>Nee. Je maakt afgesproken content in ruil voor een ervaring.</p>
</details>
<details>
<summary>Wat kost GetIt voor mijn horecazaak?</summary>
<p>Een maandabonnement plus de ervaring. We bespreken welk pakket past.</p>
</details>
<details>
<summary>Is GetIt al beschikbaar?</summary>
<p>Verwachte start: februari 2027. Deelname na selectie; boeken kan nog niet.</p>
</details>
</div>
</section>);
}

export function FinalCTA() {
  return (<section aria-label="Interesse" className="join" id="meedoen">
<div className="wrap">
<div>
<div className="eyebrow">Binnenkort in Amsterdam</div>
<h2>Maak de<br />eerste klik.</h2>
<p>Amsterdam · februari 2027. Ben jij erbij?</p>
</div>
<div>
<div className="join-actions">
<a className="join-choice" href="/interesse/creator">
<span>
<b>Interesse als creator</b>
</span>
<span className="arrow">↗</span>
</a>
<a className="join-choice" href="/interesse/horeca">
<span>
<b>Interesse als horecazaak</b>
</span>
<span className="arrow">↗</span>
</a>
</div>
</div>
</div>
</section>);
}

export function Footer() {
  return (<footer className="wrap">
<div className="footer-top">
<Brand />
<span className="tagline">Good things. Worth sharing.</span>
</div>
<div className="footer-bottom">
<span>© 2026 GetIt</span>
<span>Sfeerbeelden · geen bevestigde deelnemers</span>
</div>
</footer>);
}
