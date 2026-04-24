import { Section } from '../primitives/Section';
import { Aside } from '../primitives/Aside';

export function PeerReview() {
  return (
    <Section
      dark
      aside={<Aside tag="§ 09 / Peer review" sectionNo="— 009" />}
    >
      <div className="review-head">
        <span>Peer review · Engagement no. 001</span>
        <span>Signed 02 / 2026</span>
      </div>
      <span className="quote-mark">&quot;</span>
      <p className="quote">
        The speed and quality of delivery was <em>remarkable</em>. What we
        projected at eight months shipped in four — and the product was
        exactly what we specified.
      </p>
      <div className="sig">
        <div>
          <div className="sig-name">Marcus Rodriguez</div>
          <span className="sig-sub">Director of product · Fintech, NYC</span>
        </div>
        <div className="stamp">Verified engagement</div>
      </div>
    </Section>
  );
}
