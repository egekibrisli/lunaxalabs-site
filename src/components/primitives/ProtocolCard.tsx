type Props = {
  tag: string;
  code: string;
  title: string;
  desc: string;
  features: string[];
};

export function ProtocolCard({ tag, code, title, desc, features }: Props) {
  return (
    <div className="proto">
      <div className="proto-tag">{tag}</div>
      <span className="proto-code">{code}</span>
      <h3 className="proto-title">{title}</h3>
      <p className="proto-desc">{desc}</p>
      <ul>
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
