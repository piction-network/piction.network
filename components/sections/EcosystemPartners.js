import { Row, Col } from "../flexbox";
import SectionHeading from "../SectionHeading";

const EcosystemPartner = ({name, logo, children}) => (
  <div className="ecosystem-partner">
    <img src={logo} />
    <h2>{name}</h2>
    <div>{children}</div>
    <style jsx>{`
    text-align: center;
    `}</style>
  </div>
)

export default () => (
  <section id="ecosystem-partners">
    <SectionHeading prefix="These are our">ECOSYSTEM PARTNERS</SectionHeading>

    <Row>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="AIRBLOC" logo="static/ecosystem-partners/logo_airbloc.png" src="https://airbloc.org/">
          AIRBLOC is a decentralized personal data protocol where individuals would be able to monetize their data, and advertisers would be able to buy these data to conduct targeted marketing campaigns for higher ROIs.
        </EcosystemPartner>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="Flitto" logo="static/ecosystem-partners/logo_flitto.png" src="https://www.flitto.com/">
          Flitto is crowdsourced translation. They have more than 8.5M gloabl users and 3M active translators.
        </EcosystemPartner>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="SandBox Network" logo="static/ecosystem-partners/logo_sandbox.png" src="http://sandboxnetwork.net/">
          SandBox Networks are group of digital entertainment creators. They have more than 100 youtube creators and powerful community. Monthly view of their creation is more than 400M.
        </EcosystemPartner>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="Coinplug" logo="static/ecosystem-partners/logo_coinplug.png" src="https://www.coinplug.com/">
          Coinplug is the world's 2nd, and Korea's 1st Blockchain Patent Holder - with a cumulative of 115 blockchain related patents in Korea and 46 international patents. It is founded by the finest engineers from both Silicon Valley and Korea, including Vitalik Buterin (Co-Founder of Ethereum) as a technical advisor. Coinplug has spearheaded an array of innovative blockchain solutions and has worked with many leading enterprises in Korea.
        </EcosystemPartner>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="Metadium" logo="static/ecosystem-partners/logo_metadium.png" src="https://www.metadium.com/">
          Metadium is the next-generation identity protocol layer of the internet powered by blockchain with "trustless trust". It supports a decentralized digital identity and acts as the robust heart of Metadium ecosystem to provide secure, next-generation identity.
        </EcosystemPartner>
      </Col>
    </Row>
  </section>
)
