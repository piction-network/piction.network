import { Row, Col } from "../../flexbox";
import SectionHeading from "../../SectionHeading";

export default () => (
  <section id="problems">
    <SectionHeading prefix="디지털 콘텐츠 산업의">문제점</SectionHeading>
    <Row>
      <Col lg={4} md={12} sm={12}>
        <h4>창작자</h4>
        <ul>
          <li>
          창작자들은 플랫폼과의 계약에 있어 충분한 협상 권한이 없습니다. 받아들이거나 계약하지 못하거나, 둘 중에 하나 뿐입니다.
          </li>
          <li>
          디지털 컨텐츠의 유료화 모델과 수익 분배는 전적으로 플랫폼 중심입니다.
          </li>
          <li>
          일부 유명 작가를 제외한 대부분의 창작자들은 제작비를 플랫폼에 의지할 수 밖에 없습니다.
          </li>
          <li>
          플랫폼의 선택을 받지 못한 작품은 독자들에게 보여질 기회조차 얻지 못합니다.
          </li>
          <li>
          수익 정산 과정은 불투명하고, 느리며 창작자들은 지속적인 수입을 얻지 못합니다. 
          </li>
        </ul>
      </Col>
      <Col lg={4} md={12} sm={12}>
        <h4>플랫폼</h4>
        <ul>
          <li>
          플랫폼은 작가, 작품의 성공에 대한 절대적인 통제권을 가지고 있습니다.
          </li>
          <li>
          매출이 나는 장르, 소재 등으로 콘텐츠가 획일화되며 혁신과 다양성을 저해하고 있습니다.
          </li>
          <li>
          대기업 계열이 아닌 플랫폼 역시, 제작비와 마케팅비에 대한 부담이 큽니다.
          </li>
        </ul>
      </Col>
      <Col lg={4} md={12} sm={12}>
        <h4>소비자</h4>
        <ul>
          <li>
          현 산업구조에서 간과되고 있는 부분이 바로 소비자의 힘입니다. 작품에 대한 팬은 창작자의 성공에 없어서는 안될 부분입니다. 또한 소비자가 지불하는 금액이 바로 시장입니다.
          </li>
          <li>
          작품을 만드는 창작자와 시장의 주인인 소비자 사이에는 커뮤니케이션을 비롯한 많은 간극이 존재합니다.
          </li>
        </ul>
      </Col>
    </Row>
    <style jsx>{`
      h4 {
        color: var(--color-primary);
        font-size: 28px;
        text-align: center;
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
