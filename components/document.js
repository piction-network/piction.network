import Page from "./page";

import Hero from "./hero";
import Footer from  "./footer";
import Unit from "./unit";
import Dropdown from "./dropdown";

export default ({ locale }) => (
  <Page>
    <div className="locale">
      <Dropdown selected={locale.selected} />
    </div>
    <Hero message={locale.hero} />

    <section id="for-creator">
      <div>
        <div className="section__listing">
          <span>01</span>
        </div>
        <h2>{ locale.for_creator.title }</h2>
        <p>{ locale.for_creator.body }</p>
      </div>
    </section>

    <section id="blockchain">
      <div>
        <div className="section__listing">
          <span>02</span>
        </div>
        <h2>{ locale.blockchain.title }</h2>
        <p>{ locale.blockchain.body }</p>
      </div>
      <img src="/static/blockchain.svg" />
    </section>

    <section id="community-driven">
      <div>
        <div className="section__listing">
          <span>03</span>
        </div>
        <h2>{ locale.community_driven.title }</h2>
        <p>{ locale.community_driven.body }</p>
      </div>
      <img src="/static/investment.svg" />
    </section>

    <section id="powered-by">
      <div>
        <div className="section__listing">
          <span>04</span>
        </div>
        <h2>{ locale.powered_by.title }</h2>
        <p>{ locale.powered_by.body }</p>
      </div>
      <img src="/static/battleent.svg" />
    </section>

    <Footer contact={locale.contact} />

    <style jsx>{`
      .locale {
        float: right;
        margin-top: 50px;
      }
      section {
        display: flex;
        justify-content: space-between;
        margin-bottom: 120px;
      }
      section h2 {
        font-size: 42px;
        margin-top: 9px;
        margin-bottom: 24px;
      }
      section p {
        font-size: 18px;
        color: #444444;
        line-height: 1.5;
        max-width: 800px;
        margin-right: 24px;
      }
      .section__listing {
        color: #0045e3;
        font-size: 32px;
        font-weight: bold;
      }
      section#for-creator {
        margin-top: 30px;
      }

      @media (max-width: 768px) {
        section#for-creator {
          margin-top: 30px;
        }
        .locale {
          margin-top: 34px;
        }
        section#blockchain {
          flex-direction: column;
        }
        section#community-driven {
          flex-direction: column;
        }
      }

      @media (max-width: 640px) {
        .locale {
          margin-top: 20px;
        }
        section {
          flex-direction: column;
        }
        section p {
          font-size: 16px;
          text-align: justify;
          margin-right: 0;
        }
        .section__listing {
          font-size: 22px;
        }
        section h2 {
          font-size: 28px;
          margin-top: 9px;
          margin-bottom: 24px;
        }
        section#for-creator {
          margin-top: 100px;
        }
      }
    `}</style>
  </Page>
);

