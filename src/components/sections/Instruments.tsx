import { Section } from '../primitives/Section';
import { Aside } from '../primitives/Aside';
import { Tractography } from '../figures/Tractography';
import { CorrelationMatrix } from '../figures/CorrelationMatrix';
import { ActivationMap } from '../figures/ActivationMap';
import { Waveform } from '../figures/Waveform';
import type { ReactNode } from 'react';

type PlateProps = {
  plate: string;
  fig: string;
  caption: string;
  metaLeft: string;
  metaRight: string;
  children: ReactNode;
};

function InstrumentPlate({ plate, fig, caption, metaLeft, metaRight, children }: PlateProps) {
  return (
    <div className="instrument-plate">
      <div className="instrument-head">
        <div>{plate}</div>
        <div>
          <strong>{fig}</strong>
        </div>
      </div>
      <div className="instrument-body">{children}</div>
      <p className="instrument-caption">{caption}</p>
      <div className="instrument-meta">
        <span>{metaLeft}</span>
        <span>{metaRight}</span>
      </div>
    </div>
  );
}

export function Instruments() {
  return (
    <Section
      id="instruments"
      aside={<Aside tag="§ 06 / Instruments" sectionNo="— 006" />}
    >
      <h2 className="section-title">
        The <em>instruments.</em>
      </h2>
      <p className="section-lede">
        A sample of the figures produced per engagement. Each case file ships
        with a full visualisation plate — these are excerpts.
      </p>

      <div className="instruments-grid">
        <InstrumentPlate
          plate="Plate IV"
          fig="Fig. 04"
          caption="Operator specialisation fibre tracts. Colour denotes domain vector."
          metaLeft="n = 847 · tractography"
          metaRight="↗ archive"
        >
          <Tractography />
        </InstrumentPlate>

        <InstrumentPlate
          plate="Plate V"
          fig="Fig. 05"
          caption="Inter-protocol correlation. Diagonal blocks mark shared operator pools."
          metaLeft="14 × 14 · all engagements"
          metaRight="cool → warm"
        >
          <CorrelationMatrix />
        </InstrumentPlate>

        <InstrumentPlate
          plate="Plate VI"
          fig="Fig. 06"
          caption="Activation density across problem-space regions. Mean over the archive."
          metaLeft="n = 47 · axial view"
          metaRight="cluster-corrected"
        >
          <ActivationMap />
        </InstrumentPlate>

        <InstrumentPlate
          plate="Plate VII"
          fig="Fig. 07"
          caption="Live engagement signal. Bands indicate α / β / γ protocol activity."
          metaLeft="live feed · 14 engagements"
          metaRight="→ running"
        >
          <Waveform />
        </InstrumentPlate>
      </div>
    </Section>
  );
}
