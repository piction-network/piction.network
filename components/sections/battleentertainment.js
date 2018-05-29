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

    .number__prefix {
      color: var(--color-gray);
    }

    .number__value {
      color: var(--color-primary);
      font-size: 2.5em;
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
      <img src={ci} />
    </a>
    <small>{children}</small>
    <style jsx>{`
    text-align: center;

    img {
      height: 100px;
      width: 100px;
      object-fit: contain;
      display: block;
      margin: 0 auto;
    }

    small {
      display: none;
    }
    `}</style>
  </div>
)


export default () => (
  <section id="battle-entertainment">
    <SectionHeading>Led by Battle Entertainment</SectionHeading>
    <SectionDescription>
      <img src="static/battleent.svg" />
      <p>
        Piction Network is led by <a href="https://www.battleent.com">Battle Entertainment</a> - a leading digital contents production and distribution platform from Korea and China with the experience, industry insights and trust from leading institutions.
      </p>
      <style jsx>{`
        color: var(--color-gray);
        font-size: 1.125rem;
        img {
          width: 318px;
          height: 102px;
        }
        a {
          color: var(--color-secondary);
        }
        @media (max-width: 768px) {
          font-size: 1rem;
        }
      `}</style>
    </SectionDescription>

    <div className="numbers">
      <Row>
        <Col lg={4} md={12}>
          <Number prefix="Over" number="773,000,000+" label="views accumulated over 3.5 years" />
        </Col>
        <Col lg={4} md={12}>
          <Number prefix="Over" number="18,000,000+" label="users on our platform" />
        </Col>
        <Col lg={4} md={12}>
          <Number prefix="Over" number="370,000,000+" label="views which distribute to China" />
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
        <Col lg={12}>
          <Number prefix="Raised Over" number="9,000,000+ USD" label="from Seed funding, Series A and Series B equity funding from leading institutions that trust us:" />
        </Col>
        <Col lg={2} md={6}>
          <Investor name="Smilegate Investment" ci="/static/investors/smilegate-investment.jpg" href="http://www.smilegateinvestment.com/">
            VC of Smilegate, game developer of 'CrossFire'- global No.1 FPS, the most played FPS with over 650M
          </Investor>
        </Col>
        <Col lg={2} md={6}>
          <Investor name="Industrial Bank of Korea" ci="/static/investors/ibk.jpg" href="https://www.ibk.co.kr/">
            2nd largest government-run bank in Korea
          </Investor>
        </Col>
        <Col lg={2} md={6}>
          <Investor name="KTB Networks" ci="/static/investors/ktb.png" href="http://www.ktbnetwork.com/">
            The 1st Korean Venture Capital, established in 1981, AUM 60M USD
          </Investor>
        </Col>
        <Col lg={2} md={6}>
          <Investor name="IMM Investment" ci="/static/investors/imm.jpg" href="http://imm.co.kr/">
            Korean Top Venture Capital, AUM 2,000M
          </Investor>
        </Col>
        <Col lg={2} md={6}>
          <Investor name="Union Investment" ci="/static/investors/union.jpg" href="http://www.unionip.net/">
            Korean Top Venture Capital in the field of contents including movie, TV drama
          </Investor>
        </Col>
        <Col lg={2} md={6}>
          <Investor name="Angang Venture Investment" ci="/static/investors/angang.png" />
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
