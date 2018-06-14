import Dropdown from "./dropdown";

export default ({selected}) => (
  <nav className="navigation">
    <ul>
      <li className="logo"><img src="/static/logo.png" /></li>
      <li><a href="#teams">Team</a></li>
      <li><a href="#partners">Partners</a></li>
      <li><a href="#advisors">Advisors</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#roadmap">Roadmap</a></li>
      <li><a href="#whitepapers">Whitepapers</a></li>
    </ul>
    <style jsx>{`
    .logo img {
      height: 40px;
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
      max-width: 1256px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      list-style: none;
    }
    li {
      margin-left: 1em;
      margin-right: 1em;
    }

    @media (max-width: 768px) {
      nav {
        display: none;
      }
    }
    `}</style>
  </nav>
)
