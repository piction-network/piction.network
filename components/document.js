import Page from "./page";

import Hero from "./hero";
import Footer from  "./footer";
import Unit from "./unit";
import Dropdown from "./dropdown";

import Introduction from "./sections/introduction";
import Advisors from "./sections/advisors";
import Teams from "./sections/teams";
import Partners from "./sections/partners";
import Whitepapers from "./sections/whitepapers";

export default ({ locale }) => (
  <div>
    <Page locale={locale}>
      <div className="locale">
        <Dropdown selected={locale.selected} />
      </div>
      <Hero message={locale.hero} />

      <Introduction locale={locale} />
      <style jsx>{`
        .locale {
          position: absolute;
          padding-right: inherit;
          right: 0;
          margin-top: 50px;
        }
      `}</style>
    </Page>
    <div className="peoples page">
      <Advisors />

      <Teams />
      <style jsx>{`
        .peoples {
          background-image: url("/static/img-background-platonic.jpg");
          background-repeat: no-repeat;
          background-position: right;
          padding-bottom: 2em;
        }
      `}</style>
    </div>
    <Whitepapers />

    <Footer contact={locale.contact} />
  </div>
);

