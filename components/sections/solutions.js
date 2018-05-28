import { Row, Col } from "../flexbox";
import SectionHeading from "../SectionHeading";
import SectionDescription from "../SectionDescription";

export default () => (
  <section id="features">
    <SectionHeading>Piction Network's Features</SectionHeading>
    <Row>
      <Col lg={12}>
        <h4>Decentralized Digital Contents Platform</h4>
        <p>Returns full ownership to artists and grants artists freedom to decide on monetization models.</p>
        <p>Disintermediate intermediaries in the digital contents value chain and allow artists to earn much more from their work.</p>
        <p>Hasten the payment settlement process so that artists have a consistent income.</p>
      </Col>
      <Col lg={12}>
        <h4>Support by Community</h4>
        <p>
          Artists require a stable production cost to eliminate the economic uncertainty in the production of their work. In Piction Network, community members are able to safely support into budding artists using PXLP Tokens and receive a cut of the production’s profits.
        </p>
      </Col>
      <Col lg={12}>
        <h4>Greater Ancillary Support for Artists</h4>
        <p>
          Piction Network will help artists to leverage the power of the community. When supporters of an artist helps in marketing and outreach beyond Piction Network and when these efforts convert into sales for the artist, these supporters would be rewarded with PXLP Tokens.
        </p>
      </Col>
    </Row>
  </section>
)
