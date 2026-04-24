import { Colophon } from './components/layout/Colophon';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { Ticker } from './components/widgets/Ticker';
import { TrustBar } from './components/marketing/TrustBar';
import { Hero } from './components/sections/Hero';
import { Abstract } from './components/sections/Abstract';
import { Translation } from './components/sections/Translation';
import { Methods } from './components/sections/Methods';
import { Protocols } from './components/sections/Protocols';
import { Findings } from './components/sections/Findings';
import { Instruments } from './components/sections/Instruments';
import { CaseFile } from './components/sections/CaseFile';
import { LabNotes } from './components/sections/LabNotes';
import { PeerReview } from './components/sections/PeerReview';
import { CTA } from './components/sections/CTA';

export default function App() {
  return (
    <>
      <Colophon />
      <Nav />
      <Ticker />
      <main>
        <Hero />
        <TrustBar />
        <Abstract />
        <Translation />
        <Methods />
        <Protocols />
        <Findings />
        <Instruments />
        <CaseFile />
        <LabNotes />
        <PeerReview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
