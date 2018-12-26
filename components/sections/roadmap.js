import SectionHeading from "../SectionHeading";
import { Row, Col } from "../flexbox";

const Milestone = ({time, title, side, children}) => (
  <div className="milestone" data-side={side}>
    <div className="milestone__marker">
      {time}
    </div>
    <div className="milestone__description">
      <h4>{title}</h4>
      {children}
    </div>
    <style jsx>{`
    .milestone {
      position: relative;
      box-sizing: content-box;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
    }

    .milestone[data-side="left"] {
      width: 50%;
      border-right: 2px solid #e1e1e1;
    }

    .milestone[data-side="right"] {
      margin-left: 50%;
      width: 50%;
      border-left: 2px solid #e1e1e1;
    }

    .milestone__description {
      padding: 1em;
      box-shadow: var(--box-shadow);
      border-radius: 8px;
      font-size: 0.875em;
    }
    .milestone__description h4 {
      color: var(--color-primary);
      font-size: 1rem;
      margin-top: 0;
    }

    [data-side="left"] .milestone__description {
      margin-right: 80px;
    }

    [data-side="right"] .milestone__description {
      margin-left: 80px;
    }

    .milestone__marker {
      border: 8px solid white;
      color: var(--color-white);
      width: 88px;
      height: 88px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      background-color: var(--color-primary);
      text-align: center;
    }

    [data-side="left"] .milestone__marker {
      right: 0;
      transform: translateX(50%) translateY(50%);
    }

    [data-side="right"] .milestone__marker {
      left: 0;
      transform: translateX(-50%) translateY(50%);
    }

    @media (max-width: 768px) {
      .milestone[data-side="left"] {
        margin-left: 0;
        width: 100%;
        border-right: none;
        border-left: 2px solid #e1e1e1;
      }

      .milestone[data-side="right"] {
        width: 100%;
        margin-left: 0;
        border-left: 2px solid #e1e1e1;
      }
      .milestone__marker {
        border: none;
        width: 50px;
        height: 50px;
        font-size: 0.8em;
        padding: 0.25em;
      }

      [data-side="left"] .milestone__description {
        margin-right: 0;
        margin-left: 40px;
      }

      [data-side="right"] .milestone__description {
        margin-right: 0;
        margin-left: 40px;
      }

      [data-side="left"] .milestone__marker {
        left: 0;
        transform: translateX(-50%) translateY(50%);
      }

      [data-side="right"] .milestone__marker {
        left: 0;
        transform: translateX(-50%) translateY(50%);
      }
    }

    `}</style>
  </div>
)

export default () => (
  <section id="roadmap">
    <SectionHeading>Roadmap</SectionHeading>
    <ul>
      <li>
        <Milestone time="2018 Q4" title="POC(Proof of Concept) test release" side="left">
          <ul>
            <li>The POC of Piction Network launched. Core layer of Piction Network, including transactions, reliability of supporter smart contracts, and prevention of attacks will be tested and verified to evaluate the credibility of the ecosystem.</li>
            <li>The simplest form of the marketplace, where direct content transactions are available, will also be tested.</li>
          </ul>
        </Milestone>
      </li>
      <li>
        <Milestone time="2019 Q1" title="v0.1 alpha version release" side="right">
          <ul>
            <li>We will secure content that will be the seeds of the ecosystem and conduct trial sales of the content.</li>
            <li>
              Supporter and influencer smart contracts will be released. We will facilitate support content based on the seed content.
            </li>
            <li>
              Piction Network will proceed with ICO and conduct listing on the exchange. The listing will be conducted in the several renowned Korean and overseas exchange markets.
            </li>
            <li>
              Secure seed users through airdrop activities. Planning to enter into a partnership with global major game companies.
            </li>
          </ul>
        </Milestone>
      </li>
      <li>
        <Milestone time="2019 Q2" title="beta v0.5 version release" side="left">
          <ul>
            <li>
              We intend to expand our ecosystem partnership, which has own unique market scope in each area and a large number of users. We intend to aggressively engage a large number of users who will participate in creators, funding, marketing, and translation in order to ensure that Piction Network operates successfully and successfully.
            </li>
            <li>
              Geographically, Piction Network begins from Korea and China. Also, based on content category, it starts in the field of webtoon /web novel.
            </li>
            <li>
              Piction Network beta version will be released on mainnet.
            </li>
            <li>
              Base protocol will be determined, and SDK and API also will be announced.
            </li>
          </ul>
        </Milestone>
      </li>
      <li>
        <Milestone time="2019 Q3/Q4" title="v1.0 version release" side="right">
          <ul>
            <li>
              Piction Network will launch the full version that enables the entire content creation process, from content registration and supporter recruitment to sales.
            </li>
            <li>
              We plan to concentrate production of secondary creative based on game IP. It is also proven through the experience and history of Battle Comics, which has accumulated 18 million users in Korea.
            </li>
            <li>
              We aim to expand into other regions such as Japan, Southeast Asia.
            </li>
          </ul>
        </Milestone>
      </li>
      <li>
        <Milestone time="2020" side="left">
          <ul>
            <li>
              Ecosystem Expansion Phase, we plan to expand to the digital content market such as short clip movies. Video is the largest market for the type of content that Piction Network is planning, where fairly advanced plans are developed every day.
            </li>
            <li>
              Physical region expansion will be focused on the United States and the EU.
            </li>
          </ul>
        </Milestone>
      </li>
      <li>
        <Milestone time="2021" side="right">
          <ul>
            <li>
              We target expanding to the music market, which is the most popular and beloved content.
            </li>
            <li>
              Physical regional expansion will be focus on other underdeveloped areas such as Latin America and Africa. After 2021, the world becomes the service area of Piction Network.
            </li>
          </ul>
        </Milestone>
      </li>
    </ul>
    <style jsx>{`
    #roadmap {
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 3em;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    `}</style>
  </section>
)
