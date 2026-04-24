export function Seal() {
  return (
    <svg className="seal" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path id="ctop" d="M 30 80 A 50 50 0 0 1 130 80" />
        <path id="cbot" d="M 30 80 A 50 50 0 0 0 130 80" />
      </defs>
      <circle cx="80" cy="80" r="62" fill="none" stroke="#1F3D2E" strokeWidth="0.6" />
      <circle
        cx="80"
        cy="80"
        r="56"
        fill="none"
        stroke="#1F3D2E"
        strokeWidth="0.4"
        strokeDasharray="1,2"
      />
      <g className="seal-rotating">
        <text fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="4" fill="#1F3D2E">
          <textPath href="#ctop" startOffset="50%" textAnchor="middle">
            LUNAXA · LABORATORIES
          </textPath>
        </text>
        <text fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="4" fill="#1F3D2E">
          <textPath href="#cbot" startOffset="50%" textAnchor="middle">
            EST · MMXXV · PARIS · SF
          </textPath>
        </text>
      </g>
      <text
        x="80"
        y="95"
        textAnchor="middle"
        fontFamily="Instrument Serif, serif"
        fontStyle="italic"
        fontSize="44"
        fill="#1F3D2E"
      >
        L
      </text>
    </svg>
  );
}
