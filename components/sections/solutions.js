import { Row, Col } from "../flexbox";
import SectionHeading from "../SectionHeading";
import SectionDescription from "../SectionDescription";

export default () => (
  <section id="features">
    <SectionHeading>Piction Network's Features</SectionHeading>
    <Row>
      <Col lg={4} md={12}>
        <h4>Decentralized Digital Contents Platform</h4>
        <ul>
          <li>Returns full ownership to artists and grants artists freedom to decide on monetization models.</li>
          <li>Disintermediate intermediaries in the digital contents value chain and allow artists to earn much more from their work.</li>
          <li>Hasten the payment settlement process so that artists have a consistent income.</li>
        </ul>
      </Col>

      <Col lg={4} md={12}>
        <h4>Support by Community</h4>
        <ul>
          <li>
            Artists require a stable production cost to eliminate the economic uncertainty in the production of their work. In Piction Network, community members are able to safely support into budding artists using PXLP Tokens and receive a cut of the production’s profits.
          </li>
        </ul>
      </Col>

      <Col lg={4} md={12}>
        <h4>Greater Ancillary Support for Artists</h4>
        <ul>
          <li>
            Piction Network will help artists to leverage the power of the community. When supporters of an artist helps in marketing and outreach beyond Piction Network and when these efforts convert into sales for the artist, these supporters would be rewarded with PXLP Tokens.
          </li>
        </ul>
      </Col>
    </Row>
    <style jsx>{`
    h4 {
      color: var(--color-primary);
      font-size: 28px;
    }
    ul {
      padding-left: 1em;
    }
    li {
      margin-bottom: 1em;
    }

    @media(max-width: 640px) {
      h4 {
        font-size: 20px;
      }
    }
    `}</style>
  </section>
)
