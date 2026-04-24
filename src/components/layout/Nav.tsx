export function Nav() {
  return (
    <div className="nav">
      <div className="logo-block">
        <div className="logo">
          Lunaxa <em>Labs</em>
        </div>
        <div className="logo-sub">Paris · San Francisco</div>
      </div>
      <nav className="nav-links">
        <a href="#abstract">Abstract</a>
        <a href="#methods">Methods</a>
        <a href="#protocols">Protocols</a>
        <a href="#findings">Findings</a>
        <a href="#case">Case files</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#contact" className="btn-primary">
        Start a project
      </a>
    </div>
  );
}
