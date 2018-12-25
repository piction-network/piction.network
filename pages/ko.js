import Document from "../components/document";
import locale from "../locale/ko.json";

import Hero from "../components/hero";
import BattleEntertainment from "../components/sections/ko/battleentertainment";
import Teams from "../components/sections/teams";
import Advisors from "../components/sections/ko/advisors";
import EcosystemPartners from "../components/sections/ko/EcosystemPartners";
import Problems from "../components/sections/ko/problems";
import Solutions from "../components/sections/ko/solutions";
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

