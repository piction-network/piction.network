import Meta from "./meta";
import Navigation from "./nav";

export default ({ locale, children }) => (
  <div className="main">
    <div className="page">
      { children }
    </div>

  </div>
)
