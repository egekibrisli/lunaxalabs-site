import { Section } from '../primitives/Section';
import { Aside } from '../primitives/Aside';
import { StatRow } from '../primitives/StatRow';
import { Plate, PlateHead, PlateCaption } from '../primitives/Plate';
import { ConnectomeRing } from '../figures/ConnectomeRing';

export function Findings() {
  return (
    <Section
      id="findings"
      aside={<Aside tag="§ 05 / Findings" sectionNo="— 005" />}
    >
      <h2 className="section-title">
        Observed <em>outcomes.</em>
      </h2>
      <p className="section-lede">
        Measured against traditional hiring and delivery baselines.
      </p>
      <div className="findings-grid">
        <div>
          <StatRow
            notation="n ="
            num={<>16.6<em>×</em></>}
            label="Faster delivery"
            sub="median, vs. traditional hiring baseline"
          />
          <StatRow
            notation="σ ="
            num={<>99<em>%</em></>}
            label="Talent retention"
            sub="operator match quality, top-percentile"
          />
          <StatRow
            notation="p <"
            num={<>0<em>.01</em></>}
            label="On-time, on-budget"
            sub="outcome significance across cohort"
          />
        </div>
        <Plate>
          <PlateHead left="Plate II" right={<strong>Fig. 02</strong>} />
          <ConnectomeRing />
          <PlateCaption>
            Cross-project operator re-engagement network. Chords denote shared
            assignments across case files.
          </PlateCaption>
        </Plate>
      </div>
    </Section>
  );
}
