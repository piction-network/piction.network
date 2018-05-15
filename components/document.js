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

      <Advisors />

      <Teams />

      <style jsx>{`
        .locale {
          position: absolute;
          padding-right: inherit;
          right: 0;
          margin-top: 50px;
        }
      `}</style>
    </Page>
    <Whitepapers />

    <Footer contact={locale.contact} />
  </div>
);

