import { Section } from '../primitives/Section';
import { Aside } from '../primitives/Aside';

export function Abstract() {
  return (
    <Section
      id="abstract"
      aside={<Aside tag="§ 01 / Abstract" sectionNo="— 001" />}
    >
      <h2 className="section-title">
        We don't staff projects. We <em>build teams.</em>
      </h2>
      <div className="abstract-body">
        <p>
          Most agencies solve for headcount — bodies in seats, billable hours,
          generic pods. We solve for composition. Every engagement starts with
          understanding the shape of your problem, then assembling the specific
          team that will deliver it.
        </p>
        <p className="pull">
          The right team, matched to the right problem, will outperform a larger
          team hired on <em>résumé alone.</em>
        </p>
        <p>
          This is why 99% of our work ships on time. It's also why our clients
          come back. Every project is documented in full — so you know what
          you're buying, and you know what you got.
        </p>
      </div>
    </Section>
  );
}
