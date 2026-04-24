import { Section } from '../primitives/Section';
import { Aside } from '../primitives/Aside';
import { ProtocolCard } from '../primitives/ProtocolCard';

const PROTOCOLS = [
  {
    tag: 'Protocol α',
    code: 'α',
    title: 'Full engagement.',
    desc: 'We own the entire software lifecycle and deliver a product to specification.',
    features: ['Full ownership', 'Architectural lead', 'Maintenance', 'Acceptance'],
  },
  {
    tag: 'Protocol β',
    code: 'β',
    title: 'Embedded team.',
    desc: 'A dedicated cohort embedded in your organisation, reporting into your systems.',
    features: ['Exclusive allocation', 'Flexible scaling', 'Your workflows', 'Direct communication'],
  },
  {
    tag: 'Protocol γ',
    code: 'γ',
    title: 'Specialist cohort.',
    desc: 'Targeted expertise for bounded work — audits, accelerations, domain specialists.',
    features: ['Rapid deploy', 'Deep specialism', 'Bounded scope', 'Cost-efficient'],
  },
];

export function Protocols() {
  return (
    <Section
      id="protocols"
      aside={<Aside tag="§ 04 / Protocols" sectionNo="— 004" />}
    >
      <h2 className="section-title">
        Three standing <em>engagement</em> protocols.
      </h2>
      <p className="section-lede">
        Each protocol describes a different relationship between our laboratory
        and your organisation.
      </p>
      <div className="proto-grid">
        {PROTOCOLS.map((p) => (
          <ProtocolCard key={p.tag} {...p} />
        ))}
      </div>
    </Section>
  );
}
