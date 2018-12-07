import { SocialIcon } from 'react-social-icons';

import { Row, Col } from "../flexbox";
import SectionHeading from "../SectionHeading";

const news = [
  {
    title: "Blockchain, it now applies to digital cartoons",
    body: "In addition to logistics, distribution, film, art, and food, attempts are now being made to apply blockchain platforms to cartoons.",
    url: "https://medium.com/piction/the-fourth-industrial-revolution-blockchain-it-now-applies-to-digital-cartoons-894ede6cd9dc"
  },
  {
    title: "Blockchain Startup Piction's affiliated partner Maxim Comics simultaneously released 200 pieces...",
    body: "Piction Network, a digital content blockchain startup said that Piction's affiliated partner, a recent worldwide magazine “Maxim” launched webtoon platform “Maxim comics” and started their beta service.",
    url: "https://medium.com/piction/block-chain-startup-piction-s-affiliated-partner-maxim-comics-simultaneously-released-200-454ef28cfe72"
  },
  {
    title: "Piction Network, contracted partnership with webtoon service companies, Battle Comics & Maxim Comics",
    body: "The blockchain startup Piction Network announced that it has officially signed a strategic partnership with Battle Comics and Maxim comics.",
    url: "https://medium.com/piction/piction-network-contracted-partnership-with-webtoon-service-companies-battle-comics-maxim-1bbf8b26db30"
  }
]

const Card = ({children}) => (
  <div>
    {children}
    <style jsx>{`
    overflow: auto;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08), 0 4px 12px 0 rgba(0,0,0,0.08);
    `}</style>
  </div>
)

const CardBody = ({children}) => (
  <div>
    {children}
    <style jsx>{`
    padding: 24px;
    font-size: 0.875em;
    height: 18em;
    @media (max-width: 768px) {
      height: auto;
    }
    `}</style>
  </div>
)

const CardHeading = ({children}) => (
  <h2>
    {children}
    <style jsx>{`
    font-size: 1.2em;
    padding: 0;
    margin-top: 0;
    margin-bottom: 1em;
    height: 5em;
    @media (max-width: 768px) {
      height: auto;
    }
    `}</style>
  </h2>
)

const Link = ({href, children}) => (
  <div>
    <a href={href}>{children}</a>
    <style jsx>{`
    text-align: center;
    margin-top: 2em;
    margin-bottom: 2em;
    a {
      color: #0045e3;
      font-size: 20px;
      font-weight: bold;
    }
    `}</style>
  </div>
)

const NewsList = ({ news_list }) =>
  <Row>
    {news_list.map(news => (
      <Col lg={4} md={6} sm={12}>
        <Card>
          <a href={news.url}>
            <CardBody>
              <CardHeading>{news.title}</CardHeading>
              {news.body}
            </CardBody>
          </a>
        </Card>
      </Col>
    ))}
  </Row>

export default () => (
  <section id="media">
    <SectionHeading>MEDIA</SectionHeading>
    <NewsList news_list={news} />
    <Link href="https://medium.com/piction/">Read all latest news on Medium</Link>
  </section>
)
