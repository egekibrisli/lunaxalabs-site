import { Section } from '../primitives/Section';
import { Aside } from '../primitives/Aside';
import { Plate, PlateHead } from '../primitives/Plate';
import { DurationChart } from '../figures/DurationChart';

export function CaseFile() {
  return (
    <Section
      id="case"
      aside={<Aside tag="§ 07 / Case file" sectionNo="— 007" />}
    >
      <h2 className="section-title">
        Case file <em>no. 001</em>.
      </h2>
      <p className="section-lede">
        A tier-1 fintech infrastructure rebuild, concluded March 2025.
      </p>

      <div className="case-wrap">
        <div className="case-head">
          <span>Case no. 001 · Fintech · 2025</span>
          <span>Protocol α → β</span>
        </div>
        <div className="case-title-wrap">
          <h3 className="case-title">
            A 30-engineer infrastructure rebuild, delivered ahead of a Series C.
          </h3>
          <div className="case-shipped">Shipped on time</div>
        </div>
        <div className="case-body">
          <div>
            <div className="case-block">
              <div className="case-key">Abstract</div>
              <p className="case-text">
                A tier-1 fintech required a complete infrastructure rebuild
                prior to a Series C round. Traditional hiring projected 14
                months. Risk was rated significant.
              </p>
            </div>
            <div className="case-block">
              <div className="case-key">Methods</div>
              <p className="case-text">
                Protocol α. Thirty operators matched from network in 18 days.
                Daily visibility, weekly demos, fortnightly stakeholder sync.
              </p>
            </div>
            <div className="case-block">
              <div className="case-key">Result</div>
              <p className="case-text">
                Shipped in 5 months. Zero regressions at launch, 99.97% uptime.
                Client retained team under Protocol β for ongoing operation.
              </p>
            </div>
          </div>
          <Plate style={{ marginTop: 6 }}>
            <PlateHead left="Duration" right={<strong>Fig. 03</strong>} />
            <DurationChart />
          </Plate>
        </div>
      </div>
    </Section>
  );
}
