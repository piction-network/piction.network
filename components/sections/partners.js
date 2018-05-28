import { Row, Col } from "../flexbox";
import SectionHeading from "../SectionHeading";
import SectionDescription from "../SectionDescription";
import partner_list from "../../locale/partners/en.json";

const Partner = ({name}) => (
  <div className="partner">
    <h5>{name}</h5>
    <style jsx>{`
    .partner {
      box-shadow: var(--box-shadow);
      padding: 1em;
      background-color: var(--color-white);
      text-align: center;
    }
    `}</style>
  </div>
)

const CategoryHeading = ({children}) => (
  <div>
    <h3>{children}</h3>
    <style jsx>{`
    font-size: 28px;
    margin-top: 120px;
    text-align: center;
    color: var(--color-primary);
    `}</style>
  </div>
)

export default class Partners extends React.Component {
  render() {
    const partners = partner_list.partners.map((partner, index) => {
      return (
        <Col lg={3} md={6} sm={6} key={index}>
          <Partner name={partner.name} />
        </Col>
      )
    })
    const contents_global = partner_list.global_content.map((partner, index) => {
      return (
        <Col lg={3} md={6} sm={6} key={index}>
          <Partner name={partner.name} />
        </Col>
      )
    })

    const contents_korea = partner_list.korea_content.map((partner, index) => {
      return (
        <Col lg={3} md={6} sm={6} key={index}>
          <Partner name={partner.name} />
        </Col>
      )
    })

    const governments = partner_list.governments.map((partner, index) => {
      return (
        <Col lg={4} md={6} sm={6} key={index}>
          <Partner name={partner.name} />
        </Col>
      )
    })

    const others = partner_list.others.map((partner, index) => {
      return (
        <Col lg={3} md={6} sm={6} key={index}>
          <Partner name={partner.name} />
        </Col>
      )
    })

    return (
      <section id="partners">
        <SectionHeading prefix="These are our">PARTNERS</SectionHeading>

        <CategoryHeading>Game Company</CategoryHeading>
        <Row>
          { partners }
        </Row>

        <CategoryHeading>Global Contents</CategoryHeading>
        <Row>
          { contents_global }
        </Row>

        <CategoryHeading>Korea Contents</CategoryHeading>
        <Row>
          { contents_korea }
        </Row>

        <CategoryHeading>Government / Associations</CategoryHeading>
        <Row>
          { governments }
        </Row>

        <CategoryHeading>Others</CategoryHeading>
        <Row>
          { others }
        </Row>
      </section>
    )
  }
}
