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

export default class Partners extends React.Component {
  render() {
    const partners = partner_list.partners.map((partner, index) => {
      return (
        <Col lg={3}>
          <Partner name={partner.name} />
        </Col>
      )
    })
    const contents_global = partner_list.global_content.map((partner, index) => {
      return (
        <Col lg={3}>
          <Partner name={partner.name} />
        </Col>
      )
    })

    const contents_korea = partner_list.korea_content.map((partner, index) => {
      return (
        <Col lg={3}>
          <Partner name={partner.name} />
        </Col>
      )
    })

    const governments = partner_list.governments.map((partner, index) => {
      return (
        <Col lg={4}>
          <Partner name={partner.name} />
        </Col>
      )
    })

    const others = partner_list.others.map((partner, index) => {
      return (
        <Col lg={3}>
          <Partner name={partner.name} />
        </Col>
      )
    })

    return (
      <section id="partners">
        <SectionHeading prefix="These are our">PARTNERS</SectionHeading>
        <SectionDescription>Game Company</SectionDescription>
        <Row>
          { partners }
        </Row>

        <SectionDescription>Global Contents</SectionDescription>
        <Row>
          { contents_global }
        </Row>

        <SectionDescription>Korea Contents</SectionDescription>
        <Row>
          { contents_korea }
        </Row>

        <SectionDescription>Government / Associations</SectionDescription>
        <Row>
          { governments }
        </Row>

        <SectionDescription>Others</SectionDescription>
        <Row>
          { others }
        </Row>
      </section>
    )
  }
}
