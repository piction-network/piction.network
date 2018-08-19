import { Row, Col } from "../../flexbox";
import SectionHeading from "../../SectionHeading";

export default () => (
  <section id="features">
    <SectionHeading>Piction Network의 솔루션</SectionHeading>
    <Row>
      <Col lg={4} md={12}>
        <h4>탈중앙화된 디지털 콘텐츠 생태계</h4>
        <ul>
          <li>수익 배분, 분량, 연재방식 등 작품에 대한 모든 것들을 창작자 스스로 자유롭게 결정할 수있는 권한을 부여합니다.</li>
          <li>밸류체인에서 플랫폼의 역할을 생태계 참여자에게 분산시키고, 창작자가 더 많은 수익을 갖게 합니다.</li>
          <li>즉각적이고 투명한 수익 분배가 가능합니다.</li>
        </ul>
      </Col>

      <Col lg={4} md={12}>
        <h4>독자에 의한 제작비 조달</h4>
        <ul>
          <li>
          창작을 위해서는 제작비가 필요합니다. Piction Network에서 유저들은 토큰을 사용하여 창작자의 제작비를 지원하고, 투명한 방식으로 수익을 공유받습니다.
          </li>
        </ul>
      </Col>

      <Col lg={4} md={12}>
        <h4>독자들의 활동에 의한 창작 지원</h4>
        <ul>
          <li>
          Piction Network에서는 토큰이코노미에 의해, 경제적 인센티브에 기반한 유저들의 참여를 가능하게 합니다. 팬들은 Piction Network에서 마케팅, 홍보, 번역 및 검수 역할을 수행하고, 이러한 노력이 매출로 연결되면 전환되면 토큰으로 보상 받게됩니다.
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
