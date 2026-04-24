import { RevealOnScroll } from '../primitives/RevealOnScroll';
import { Plate, PlateHead, PlateCaption, PlateLegend, Scalebar } from '../primitives/Plate';
import { BrainConnectome } from '../figures/BrainConnectome';

export function Hero() {
  return (
    <section className="hero">
      <RevealOnScroll>
        <div className="hero-eyebrow">Now taking projects for Q3 2026</div>
        <h1>
          Software, <em>shipped</em>. On time. Every time.
        </h1>
        <p className="lede">
          Lunaxa Labs matches elite engineers to your project in days, not
          months. We've delivered 47 engagements across fintech, health, and
          frontier infrastructure — every one on time and on budget.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn-primary">Start a project</a>
          <a href="#case" className="btn-ghost">See our work</a>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <Plate>
          <PlateHead left="Plate I" right={<strong>Fig. 01</strong>} />
          <BrainConnectome />
          <PlateCaption>
            Observed connection topology in a distributed engineering network.
            Hubs indicate cross-domain operators; labels mark functional regions.
          </PlateCaption>
          <PlateLegend>
            <div><span>I</span> · Systems</div>
            <div><span>II</span> · Interface</div>
            <div><span>III</span> · Data</div>
            <div><span>IV</span> · Language</div>
            <div><span>V</span> · Runtime</div>
            <div><span>n</span> = 3,412</div>
          </PlateLegend>
          <Scalebar>100 operators</Scalebar>
        </Plate>
      </RevealOnScroll>
    </section>
  );
}
