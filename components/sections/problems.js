import { Row, Col } from "../flexbox";
import SectionHeading from "../SectionHeading";
import SectionDescription from "../SectionDescription";

export default () => (
  <section id="problems">
    <SectionHeading subfix="IN THE DIGITAL CONTENTS INDUSTRY">PROBLEMS</SectionHeading>
    <Row>
      <Col lg={4}>
        <h4>Artists</h4>
        <p>
          Left on the receiving end, artists do not have sufficient negotiating power to demand for lower fees for their work
        </p>
        <p>
          Pricing models of digital contents are entirely based off central monopolies.
        </p>
        <p>
          Promising and budding artists face high barriers to entry in terms of cost and sustainability.
        </p>
        <p>
          Payment settlement process is slow and inefficient, and artists cannot earn a consistent income
        </p>
        <p>
          Face production cost issues for their artwork that leaves them to discontinue their work.
        </p>
      </Col>
      <Col lg={4}>
        <h4>Extractive Monopolies</h4>
        <p>
          Digital contents publishers have almost absolute control over an artist’s success in the digital contents industry.
        </p>
        <p>
          Monopolisation over resources and access crowds out budding artists. The digital contents industry faces a deep problem of limited innovation and creativity as young talents are not given the space to grow and showcase their work to the wider global community
          k
        </p>
      </Col>
      <Col lg={4}>
        <h4>Community</h4>
        <p>
          The largest untapped resource today is the power of the community. Community fans and loyal supporters form an integral part of an artist’s success in the industry. They also form a crucial role in helping to fund an artist’s work.
        </p>
        <p>
          <strong>It is said that money is the driver of content, and not content being the driver of money.</strong> However, in today’s world, the gap between the community and the artist is mired in layers of communication barriers and funding barriers.
        </p>
      </Col>
    </Row>
  </section>
)
