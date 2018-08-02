import SectionHeading from "../SectionHeading";
import SectionDescription from "../SectionDescription";
import { Row, Col } from "../flexbox";
import investors from "../../locale/investors/en.json";

const Number = ({prefix, number, label, children}) => (
  <div className="number">
    <div className="number__prefix">{prefix}</div>
    <div className="number__value">{number}</div>
    <div className="number__description">{label}</div>
    {children}
    <style jsx>{`
    text-align: center;
    .number {
      font-size: 0.8em;
    }

    .number__prefix {
      color: var(--color-gray);
    }

    .number__value {
      color: var(--color-primary);
      font-size: 2em;
      font-weight: bold;
    }
    .number__description {
      color: var(--color-gray);
    }
    `}</style>
  </div>
)

const Investor = ({name, ci, href, children}) => (
  <div className="investor">
    <a href={href}>
      <img src={ci} alt={name} />
    </a>
    <p>{children}</p>
    <style jsx>{`
    text-align: center;

    img {
      height: 80px;
      width: 100px;
      object-fit: contain;
      display: block;
      margin: 0 auto;
    }
    p {
      font-size: 0.7em;
      color: var(--color-light-gray);
    }
    @media (max-width: 768px) {
      img {
        width: 180px;
        height: 80px;
      }
    }
    `}</style>
  </div>
)


export default () => (
  <section id="battle-entertainment">
    <SectionHeading>Led by Battle Entertainment</SectionHeading>
    <div className="battleentertainment">
      <img src="static/battleent.svg" alt="Battle Entertainment" />
      <p className="battleentertainment__description">
        Piction Network is led by <a href="https://www.battleent.com">Battle Entertainment</a> - a leading digital contents production and distribution platform from Korea and China with the experience, industry insights and trust from leading institutions.
      </p>
      <style jsx>{`
        img {
          width: 200px;
          height: 80px;
        }
        a {
          color: var(--color-secondary);
        }
        .battleentertainment {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .battleentertainment__description {
          color: var(--color-gray);
        }
        @media (max-width: 768px) {
          font-size: 1rem;
        }
      `}</style>
    </div>

    <div className="numbers">
      <Row>
        <Col lg={3} md={12}>
          <Number prefix="Over" number="773,000,000+" label="views accumulated over 3.5 years" />
        </Col>
        <Col lg={3} md={12}>
          <Number prefix="Over" number="18,000,000+" label="users on our platform" />
        </Col>
        <Col lg={3} md={12}>
          <Number prefix="Over" number="37,000,000+" label="viewers which distribute to China" />
        </Col>
        <Col lg={3} md={12}>
          <Number prefix="Raised Over" number="9,000,000+ USD" label="from Seed funding, Series A and Series B equity funding from leading institutions that trust us:" />
        </Col>
      </Row>
      <style jsx>{`
      .numbers {
        margin-top: 40px;
      }
      `}</style>
    </div>
    <div className="investments">
      <Row>
        <Col lg={2} md={12}>
          <Investor name="Smilegate Investment" ci="/static/investors/smilegate-investment.jpg" href="http://www.smilegateinvestment.com/">
            Smilegate Investments is one of Korea's leading venture capital fund that focuses on investing in promising media, gaming and entertainment related projects. They are behind CROSSFIRE, the most played FPS with over 650m users.
          </Investor>
        </Col>
        <Col lg={2} md={12}>
          <Investor name="Industrial Bank of Korea" ci="/static/investors/ibk.jpg" href="https://www.ibk.co.kr/">
            Industrial Bank of Korea is owned by the Korean government with over 200 billion USD assets under management.
          </Investor>
        </Col>
        <Col lg={2} md={12}>
          <Investor name="KTB Networks" ci="/static/investors/ktb.png" href="http://www.ktbnetwork.com/">
            KTB Networks is one of Korea's oldest venture capital fund.
          </Investor>
        </Col>
        <Col lg={2} md={12}>
          <Investor name="IMM Investment" ci="/static/investors/imm.jpg" href="http://imm.co.kr/">
            IMM is one of Korea's leading venture capital fund that has a total asset under management of 2 billion USD.
          </Investor>
        </Col>
        <Col lg={2} md={12}>
          <Investor name="Union Investment" ci="/static/investors/union.jpg" href="http://www.unionip.net/">
            Union Investment Partners is one of Korea's leading venture capital firm with a portfolio that is focused on films, animations, games, TV dramas and live concerts.
          </Investor>
        </Col>
        <Col lg={2} md={12}>
          <Investor name="Angang Venture Investment" ci="/static/investors/angang.png">
            Angang investment is a venture capital fund that specializes in investing in software, medical equipment, media broadcasting and entertainment related projects.
          </Investor>
        </Col>
      </Row>
      <style jsx>{`
      .investments {
        margin-top: 40px;
      }
      `}</style>
    </div>
  </section>
)
