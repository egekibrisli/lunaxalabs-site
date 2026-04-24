import { RevealOnScroll } from '../primitives/RevealOnScroll';
import { Aside } from '../primitives/Aside';
import { TranslationCanvas } from '../widgets/TranslationCanvas';

export function Translation() {
  return (
    <section className="section translation-section" id="translation">
      <div className="section-inner">
        <RevealOnScroll as="aside" className="aside">
          <Aside tag="§ 02 / Translation" sectionNo="— 002" />
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="section-title">
            From <em>cortex</em> to code.
          </h2>
          <p className="section-lede">
            Every software system begins as a pattern of activation in someone's
            mind. We watch the translation happen, and build tools that compress
            the distance.
          </p>
        </RevealOnScroll>
      </div>

      <div className="translation-wrap">
        <TranslationCanvas />
        <div className="translation-labels">
          <div className="translation-label">
            <span className="translation-label-tag">— Plate III / Fig. 08a</span>
            <span className="translation-label-text">
              The <em>biological</em> system, observed.
            </span>
          </div>
          <div className="translation-label right">
            <span className="translation-label-tag">— Fig. 08b / continues</span>
            <span className="translation-label-text">
              The <em>computational</em> system, emerging.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
