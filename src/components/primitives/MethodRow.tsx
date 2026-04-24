type Props = {
  num: string;
  keyLabel: string;
  title: string;
  body: string;
};

export function MethodRow({ num, keyLabel, title, body }: Props) {
  return (
    <div className="method-row">
      <div className="method-num">{num}</div>
      <div className="method-key">{keyLabel}</div>
      <div className="method-desc">
        <div className="method-desc-title">{title}</div>
        <div className="method-desc-body">{body}</div>
      </div>
    </div>
  );
}
