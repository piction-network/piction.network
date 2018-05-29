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
        <Milestone time="2018 Q3" title="Test net release" side="left">
          The public test network of the Piction ecosystem will be launched. The consistency of basic transactions, reliability of supporter smart contracts, and prevention of attacks will be tested and verified to evaluate the credibility of the ecosystem
        </Milestone>
      </li>
      <li>
        <Milestone time="2018 Q4" title="Beta service release + seed content securement" side="right">
          The simplest form of marketplace version where direct content transactions are available will be released. We will secure content that can be seeds of the ecosystem and conduct trial sales of the content.
        </Milestone>
      </li>
      <li>
        <Milestone time="2019 Q1" title="v0.5" side="left">
          Supporter and influencer smart contracts will be released. We will facilitate direct investment in content based on the seed content.
        </Milestone>
      </li>
      <li>
        <Milestone time="2019 Q2" title="v1.0" side="right">
          We will launch the full version that enables the entire content creation process, from content registration and supporter recruitment to sales.
        </Milestone>
      </li>
    </ul>
    <style jsx>{`
    #roadmap {
      margin-left: auto;
      margin-right: auto;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    `}</style>
  </section>
)
