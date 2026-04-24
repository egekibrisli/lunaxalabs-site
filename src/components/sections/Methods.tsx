import { Section } from '../primitives/Section';
import { Aside } from '../primitives/Aside';
import { MethodRow } from '../primitives/MethodRow';

const METHODS = [
  {
    num: '01',
    keyLabel: 'Observation',
    title: 'Scope the system.',
    body:
      'Constraints, architecture, and failure modes are documented before a line of code is written. Stakeholder interviews produce a project signature.',
  },
  {
    num: '02',
    keyLabel: 'Assembly',
    title: 'Match the team.',
    body:
      'Our network of 3,400+ operators is filtered by project signature. Composition is optimised against prior outcomes — not titles, not résumés.',
  },
  {
    num: '03',
    keyLabel: 'Iteration',
    title: 'Run the experiment.',
    body:
      'Tight cycles, daily visibility, and engineering leadership that holds the line on architectural decisions. Drift is flagged within 24 hours.',
  },
  {
    num: '04',
    keyLabel: 'Delivery',
    title: 'Report the result.',
    body:
      'Rigorous acceptance testing, measurable outcomes, documented handoff — or continued operation under one of our standing protocols.',
  },
];

export function Methods() {
  return (
    <Section
      id="methods"
      aside={<Aside tag="§ 03 / Methods" sectionNo="— 003" />}
    >
      <h2 className="section-title">
        The laboratory <em>protocol</em>.
      </h2>
      <p className="section-lede">
        No templates — each project is scoped to its own constraints before
        assembly begins. The sequence is consistent; the composition is not.
      </p>
      <div>
        {METHODS.map((m) => (
          <MethodRow key={m.num} {...m} />
        ))}
      </div>
    </Section>
  );
}
