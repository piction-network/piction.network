import { Row, Col } from "../flexbox";
import SectionHeading from "../SectionHeading";
import SectionDescription from "../SectionDescription";

export default () => (
  <section id="problems">
    <SectionHeading subfix="IN THE DIGITAL CONTENTS INDUSTRY">PROBLEMS</SectionHeading>
    <Row>
      <Col lg={4} md={12} sm={12}>
        <h4>Artists</h4>
        <ul>
          <li>
            Left on the receiving end, artists do not have sufficient negotiating power to demand for lower fees for their work
          </li>
          <li>
            Pricing models of digital contents are entirely based off central monopolies.
          </li>
          <li>
            Promising and budding artists face high barriers to entry in terms of cost and sustainability.
          </li>
          <li>
            Payment settlement process is slow and inefficient, and artists cannot earn a consistent income
          </li>
          <li>
            Face production cost issues for their artwork that leaves them to discontinue their work.
          </li>
        </ul>
      </Col>
      <Col lg={4} md={12} sm={12}>
        <h4>Extractive Monopolies</h4>
        <ul>
          <li>
            Digital contents publishers have almost absolute control over an artist’s success in the digital contents industry.
          </li>
          <li>
            Monopolisation over resources and access crowds out budding artists. The digital contents industry faces a deep problem of limited innovation and creativity as young talents are not given the space to grow and showcase their work to the wider global community
          </li>
        </ul>
      </Col>
      <Col lg={4} md={12} sm={12}>
        <h4>Community</h4>
        <ul>
          <li>
            The largest untapped resource today is the power of the community. Community fans and loyal supporters form an integral part of an artist’s success in the industry. They also form a crucial role in helping to fund an artist’s work.
          </li>
          <li>
            <strong>It is said that money is the driver of content, and not content being the driver of money.</strong> However, in today’s world, the gap between the community and the artist is mired in layers of communication barriers and funding barriers.
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
