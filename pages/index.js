import Document from "../components/document";
import locale from "../locale/en.json";

import Hero from "../components/hero";
import BattleEntertainment from "../components/sections/battleentertainment";
import Teams from "../components/sections/teams";
import Advisors from "../components/sections/advisors";
import EcosystemPartners from "../components/sections/EcosystemPartners";
import Problems from "../components/sections/problems";
import Solutions from "../components/sections/solutions";
import Roadmap from "../components/sections/roadmap";
import Whitepapers from "../components/sections/whitepapers";
import Media from "../components/sections/media";

export default () => (
  <Document locale={locale}>
    <Hero locale={locale.hero} />
    <div className="peoples page">
      <BattleEntertainment />
      <Teams />
      <EcosystemPartners />
      <Advisors />
    </div>

    <div className="page">
      <Problems />
      <Solutions />
      <Roadmap />
      <Media />
    </div>

    <Whitepapers />
  </Document>
);

