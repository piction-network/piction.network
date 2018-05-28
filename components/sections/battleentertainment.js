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

    .number__value {
      color: var(--color-primary);
      font-size: 2.5em;
      font-weight: bold;
    }
    `}</style>
  </div>
)

const Investor = ({name, ci, children}) => (
  <div className="investor">
    <img src={ci} />
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
    `}</style>
  </div>
)


export default () => (
  <section id="battle-entertainment">
    <SectionHeading>Led by Battle Entertainment</SectionHeading>
    <SectionDescription>
      <img src="static/battleent.svg" />
      <p>
         Piction Network is led by Battle Entertainment - a leading digital contents production and distribution platform from South Korea with the experience, industry insights and trust from leading institutions.
      </p>
    </SectionDescription>

    <Row>
      <Col lg={6}>
        <Number prefix="Over" number="773,000,000+" label="views accumulated over 3.5 years" />
      </Col>
      <Col lg={6}>
        <Number prefix="Over" number="18,000,000+" label="users on our platform" />
      </Col>
    </Row>
    <Row>
      <Col lg={12}>
        <Number prefix="Raised Over" number="9,000,000+" label="USD from Seed funding, Series A and Series B equity funding from leading institutions that trust us:" />
      </Col>
      <Col lg={2}>
        <Investor name="Smilegate Investment" ci="/static/investors/smilegate-Investment.jpg">
          VC of Smilegate, game developer of 'CrossFire'- global No.1 FPS, the most played FPS with over 650M
        </Investor>
      </Col>
      <Col lg={2}>
        <Investor name="Industrial Bank of Korea" ci="/static/investors/ibk.jpg">
          2nd largest government-run bank in Korea
        </Investor>
      </Col>
      <Col lg={2}>
        <Investor name="KTB Networks" ci="/static/investors/ktb.png">
          The 1st Korean Venture Capital, established in 1981, AUM 60M USD
        </Investor>
      </Col>
      <Col lg={2}>
        <Investor name="IMM Investment" ci="/static/investors/imm.jpg">
          Korean Top Venture Capital, AUM 2,000M
        </Investor>
      </Col>
      <Col lg={2}>
        <Investor name="Union Investment" ci="/static/investors/union.jpg">
          Korean Top Venture Capital in the field of contents including movie, TV drama
        </Investor>
      </Col>
      <Col lg={2}>
        <Investor name="Angang Venture Investment" ci="/static/investors/angang.png" />
      </Col>
    </Row>
  </section>
)
