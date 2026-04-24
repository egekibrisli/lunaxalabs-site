import { Seal } from './Seal';

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top-inner">
          <div>
            <Seal />
          </div>
          <div>
            <div className="footer-head">Research</div>
            <ul>
              <li>
                <a href="#abstract">Abstract</a>
              </li>
              <li>
                <a href="#methods">Methods</a>
              </li>
              <li>
                <a href="#protocols">Protocols</a>
              </li>
              <li>
                <a href="#findings">Findings</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-head">Archive</div>
            <ul>
              <li>
                <a href="#case">Case files</a>
              </li>
              <li>
                <a href="#">Lab notes</a>
              </li>
              <li>
                <a href="#">Publications</a>
              </li>
              <li>
                <a href="#">Bibliography</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-head">Contact</div>
            <ul>
              <li>
                <a href="mailto:lunaxa.labs@gmail.com">lunaxa.labs@gmail.com</a>
              </li>
              <li>Paris · France</li>
              <li>San Francisco · CA</li>
              <li>
                <a href="#contact">Submit a brief →</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>§ Lunaxa Labs · © MMXXVI</div>
        <div className="c">Vol. 01 · No. 003 · April 2026</div>
        <div className="r">Privacy · Terms</div>
      </div>
    </footer>
  );
}
