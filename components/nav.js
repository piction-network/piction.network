import Dropdown from "./dropdown";

export default ({selected}) => (
  <nav className="navigation">
    <ul>
      <li className="logo"><img src="/static/logo.png" alt="Piction Network" /></li>
      <li><a href="#teams">Team</a></li>
      <li><a href="#partners">Partners</a></li>
      <li><a href="#advisors">Advisors</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#roadmap">Roadmap</a></li>
      <li><a href="#whitepapers">Whitepapers</a></li>
    </ul>

    <ul className="mobile">
      <li className="right">
        <Dropdown selected={selected} />
      </li>
    </ul>


    <style jsx>{`
    .logo img {
      height: 2.5em;
    }
    nav {
      border-top: 4px solid var(--color-primary);
      background-color: rgba(255, 255, 255, 0.95);
      box-shadow: var(--box-shadow);
      position: fixed;
      width: 100%;
      z-index: 100;
      display: flex;
    }
    ul {
      width: 100%;
      padding: 0;
      height: 64px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      list-style: none;
    }
    li.right {
      margin-left: auto;
      margin-right: 1em;
    }
    li {
      margin-left: 1em;
      margin-right: 1em;
    }

    @media (max-width: 48em) {
      nav ul {
        display: none;
      }
      nav ul.mobile {
        display: block;
        position: absolute;
        width: 200px;
        right: 0;
        top: .5em;
      }
    }
    `}</style>
  </nav>
)
