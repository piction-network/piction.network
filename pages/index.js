import Document from "../components/document";
import locale from "../locale/en.json";

import BattleEntertainment from "../components/sections/battleentertainment";
import Teams from "../components/sections/teams";
import Advisors from "../components/sections/advisors";
import EcosystemPartners from "../components/sections/EcosystemPartners";
import Problems from "../components/sections/problems";
import Solutions from "../components/sections/solutions";
import Roadmap from "../components/sections/roadmap";

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

