import { AppShowcase } from '@/components/AppShowcase';
import { Header, Hero, BrandStrip, AudienceCards, Editorial, ExampleExperience, FAQ, FinalCTA, Footer } from '@/components/Marketing';
export default function Home() {
  return <><a className="skip-link" href="#main">Naar de inhoud</a><Header /><main id="main"><Hero /><BrandStrip /><AudienceCards /><AppShowcase /><Editorial /><ExampleExperience /><FAQ /><FinalCTA /></main><Footer /></>;
}
