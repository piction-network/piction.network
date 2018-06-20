import { Row, Col } from "../flexbox";
import SectionHeading from "../SectionHeading";

const EcosystemPartner = ({name, logo, children}) => (
  <div className="ecosystem-partner">
    <img src={logo} className="ecosystem-partner__logo" />
    <h2 className="ecosystem-partner__name">{name}</h2>
    <div className="ecosystem-partner__description">{children}</div>
    <style jsx>{`
    text-align: center;
    .ecosystem-partner__logo {
      height: 157px;
    }
    .ecosystem-partner__description {
      font-size: 0.7em;
      color: var(--color-light-gray);
    }
    `}</style>
  </div>
)

export default () => (
  <section id="partners">
    <SectionHeading prefix="These are our">ECOSYSTEM PARTNERS</SectionHeading>

    <Row>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="Smilegate Stove" logo="static/ecosystem-partners/logo_smilegatestove.png" src="http://sandboxnetwork.net/">
          Smilegate Stove is the game platform development arm of Smilegate which has grown into a globally renowned company boosted by its success of its FPS game ‘Crossfire’. Smilegate Stove provides platform services where game users can share, experience and buy various contents that they have created. This platform is operated as a C2C(Consumer to Consumer) platform enabling active two-way transactions between the users.
        </EcosystemPartner>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="AIRBLOC" logo="static/ecosystem-partners/logo_airbloc.jpg" src="https://airbloc.org/">
          Airbloc is a decentralized personal data protocol where individuals would be able to monetize their data, and advertisers would be able to buy these data to conduct targeted marketing campaigns for higher ROIs.
 To grow the user base in Piction Network, we will be leveraging Airbloc Protocol’s data marketplace to purchase insightful data to discover and target customer segments that are interested in digital contents.
        </EcosystemPartner>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="Flitto" logo="static/ecosystem-partners/logo_flitto.png" src="https://www.flitto.com/">
          Flitto is a global crowdsourced translation agency with more than 8.5M global users and 3M active translators over 173 countries that can translate 23 languages. Piction Network has a full contractual partnership with Flitto. Flitto's existing base of translators can be part of Piction Network’s crowdsourced translators.
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
