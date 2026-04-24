import { RevealOnScroll } from '../primitives/RevealOnScroll';

const CLIENTS = [
  'Axiom Capital',
  'Meridian Health',
  'Northwind',
  'Parallax',
  'Vessel',
  'Ironclad',
];

export function TrustBar() {
  return (
    <RevealOnScroll className="trust-bar">
      <div className="trust-bar-inner">
        <div className="trust-label">Trusted by teams at</div>
        <div className="trust-logos">
          {CLIENTS.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}
