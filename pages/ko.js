import Document from "../components/document";
import locale from "../locale/ko.json";

import BattleEntertainment from "../components/sections/ko/battleentertainment";
import Teams from "../components/sections/teams";
import Advisors from "../components/sections/ko/advisors";
import EcosystemPartners from "../components/sections/ko/EcosystemPartners";
import Problems from "../components/sections/ko/problems";
import Solutions from "../components/sections/ko/solutions";
import Roadmap from "../components/sections/ko/roadmap";

export default () => (
  <Document locale={locale} sections={{
    BattleEntertainment: BattleEntertainment,
    Teams: Teams,
    Advisors: Advisors,
    EcosystemPartners: EcosystemPartners,
    Problems: Problems,
    Solutions: Solutions,
    Roadmap: Roadmap
  }} />
);

