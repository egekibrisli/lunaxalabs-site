import { RevealOnScroll } from '../primitives/RevealOnScroll';

export function CTA() {
  return (
    <section className="cta" id="contact">
      <RevealOnScroll>
        <div className="cta-eye">Ready when you are</div>
        <h2>
          Let's ship <em>something</em> ambitious.
        </h2>
        <p className="cta-sub">
          Tell us about your project. We'll get back within two business days
          with a proposed approach, team, and timeline — no sales process, no
          slide deck.
        </p>
        <div className="hero-ctas" style={{ justifyContent: 'center' }}>
          <a href="mailto:lunaxa.labs@gmail.com" className="btn-primary">
            Start a project
          </a>
          <a href="mailto:lunaxa.labs@gmail.com" className="btn-ghost">
            Book a call
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
