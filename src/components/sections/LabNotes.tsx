import { Section } from '../primitives/Section';
import { Aside } from '../primitives/Aside';

const NOTES = [
  {
    no: 'No. 014',
    date: 'March 2026',
    title: 'On matching teams to problem signatures.',
    excerpt:
      'A short essay on why résumés fail as matching features, and what our network uses instead.',
  },
  {
    no: 'No. 013',
    date: 'February 2026',
    title: 'Postmortem of a 5-month ship.',
    excerpt:
      'Technical reflection on the fintech rebuild: what worked, what we would change, and the numbers.',
  },
  {
    no: 'No. 012',
    date: 'January 2026',
    title: 'The cost of context loss.',
    excerpt:
      'Why embedded cohorts outperform rotating contractors, with measured delivery data from our archive.',
  },
];

export function LabNotes() {
  return (
    <Section
      id="notes-section"
      aside={<Aside tag="§ 08 / Lab notes" sectionNo="— 008" />}
    >
      <h2 className="section-title">
        Recent from the <em>laboratory.</em>
      </h2>
      <p className="section-lede">
        Essays, postmortems, and technical notes. Published monthly.
      </p>
      <div className="notes-grid">
        {NOTES.map((n) => (
          <article className="note" key={n.no}>
            <div className="note-meta">
              <span>{n.no}</span>
              <span>{n.date}</span>
            </div>
            <h3 className="note-title">{n.title}</h3>
            <p className="note-excerpt">{n.excerpt}</p>
            <div className="note-read">Read →</div>
          </article>
        ))}
      </div>
    </Section>
  );
}
