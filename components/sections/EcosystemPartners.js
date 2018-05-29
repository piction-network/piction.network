import { Row, Col } from "../flexbox";
import SectionHeading from "../SectionHeading";

const EcosystemPartner = ({name, logo, children}) => (
  <div className="ecosystem-partner">
    <h2>{name}</h2>
    <div>{children}</div>
  </div>
)

export default () => (
  <section id="ecosystem-partners">
    <SectionHeading prefix="These are our">ECOSYSTEM PARTNERS</SectionHeading>

    <Row>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="Airbloc">
          <p>
            AIRBLOC is a decentralized personal data protocol where individuals would be able to monetize their data, and advertisers would be able to buy these data to conduct targeted marketing campaigns for higher ROIs.
          </p>
        </EcosystemPartner>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="Coinplug" />
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="D-Con" />
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="Maxim" />
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="Flitto" />
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="Metadium" />
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="SandBox Network" />
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="Law firm, Samyool" />
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="Twoline code" />
      </Col>
    </Row>
  </section>
)
