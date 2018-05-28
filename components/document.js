import Page from "./page";

import Hero from "./hero";
import Footer from  "./footer";
import Unit from "./unit";
import Dropdown from "./dropdown";

import BattleEntertainment from "./sections/battleentertainment";

import Advisors from "./sections/advisors";
import Teams from "./sections/teams";
import Partners from "./sections/partners";
import Whitepapers from "./sections/whitepapers";

import Problems from "./sections/problems";
import Solutions from "./sections/solutions";

import Roadmap from "./sections/roadmap";

export default ({ locale }) => (
  <div>
    <Page locale={locale}>
      <div className="locale">
        <Dropdown selected={locale.selected} />
      </div>
      <Hero locale={locale.hero} />

      <style jsx>{`
        .locale {
          position: absolute;
          padding-right: inherit;
          right: 0;
          margin-top: 50px;
        }

        @media (max-width: 768px) {
          .locale {
            margin-top: 36px;
          }
        }
        @media (max-width: 640px) {
          .locale {
            margin-top: 26px;
          }
        }

      `}</style>
    </Page>
    <div className="peoples page">
      <BattleEntertainment />
      <Teams />
      <Advisors />
      <Partners />

      <style jsx>{`
        .peoples {
          background-image: url("/static/img-background-platonic.jpg");
          background-repeat: no-repeat;
          background-position: right;
          padding-bottom: 2em;
        }
      `}</style>
    </div>
    <div className="page">
      <Problems />
      <Solutions />
      <Roadmap />
      <Whitepapers />
    </div>

    <Footer contact={locale.contact} />
  </div>
);

