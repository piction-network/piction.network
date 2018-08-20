import { Row, Col } from "../../flexbox";
import SectionHeading from "../../SectionHeading";

const EcosystemPartner = ({name, logo, href, children}) => (
  <div className="ecosystem-partner">
    <a href={href}>
      <img src={logo} className="ecosystem-partner__logo" alt={name} />
    </a>
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
        <EcosystemPartner name="맥심코믹스" logo="/static/ecosystem-partners/logo_maximcomics.png" href="http://comics.maximkorea.net">
        연간 150만부 판매량을 자랑하는 국내 최대 월간지 MAXIM의 만화 전문 자회사, 
성인 남성독자를 대상으로 한 서비스를 런칭할 예정. 
Piction Network의 Contents Distributor로서 성인 남성 독자들을 생태계로 참여시킬 예정
        </EcosystemPartner>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="에어블록" logo="/static/ecosystem-partners/logo_airbloc.jpg" href="https://airbloc.org/">
        개인들의 데이터 주권을 컨셉으로 한 블록체인 기반 탈중앙 데이터 프로토콜, 
OK Blockchain Capital, Houbi Capital, ICON 등의 유수의 글로벌 펀드를 유치 
Airbloc의 마켓플레이스를 통해 Piction Network 생태계에 기여할 적극적인 유저층들을 타겟팅, 유치할 예정
        </EcosystemPartner>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="플리토" logo="/static/ecosystem-partners/logo_flitto.png" href="https://www.flitto.com/">
        전세계 173개국 23개 언어를 지원하는 번역 플랫폼, 
850만명의 유저와 300만명의 번역가의 활동을 통해 바이두, 네이버 등에 번역 데이터를 공급 중. 
Flitto는 Piction Network의 생태계 일원으로 다수의 콘텐츠를 번역, 현지화해 글로벌 성장을 도모 
        </EcosystemPartner>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="아프리카TV" logo="/static/ecosystem-partners/logo_afreecatv.png" href="http://www.afreecatv.com/">
        월간 사용자수 600만명 이상의 국내 대표적인 비디오 라이브스트리밍 서비스,
Piction Network의 Contents Distributor로서 빠른 유저 확장을 가능케 할 예정 
        </EcosystemPartner>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="샌드박스 네트워크" logo="/static/ecosystem-partners/logo_sandbox.png" href="http://sandboxnetwork.net/">
        도티, 잠뜰 등 100명 이상의 인기 유튜버를 보유한 국내 최고의 MCN 회사. 
4억뷰 이상의 월간 View수를 기록하고 있으며, 
Sandbox의 크리에이터의 영향력을 바탕으로 Piction Network의 콘텐츠는 더 많은 유저 접점을 보유할 것
        </EcosystemPartner>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="코인플러그" logo="/static/ecosystem-partners/logo_coinplug.png" href="https://www.coinplug.com/">
          전세계에서 2번째로 많은 블록체인 특허, 115개를 보유한 대표적인 블록체인 기술 기업. 
이더리움의 아버지, Vitalik Buterin이 기술자문을 맡고 있을 정도로 글로벌 블록체인 리더들의 주목을 받는 회사
Piction Network의 기술 개발 및 구현을 위한 자문과 컨설팅을 제공 
        </EcosystemPartner>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <EcosystemPartner name="메타디움" logo="/static/ecosystem-partners/logo_metadium.png" href="https://www.metadium.com/">
        탈중앙화된 디지털 Identification 프로토콜,
Hashed, GBIC, FBC, Kenetic 등 글로벌 탑 크립토 투자사들로부터 펀딩 유치 
Metadium의 SDK를 활용하여 Piction Network 생태계 참여자들의 KYC 등의 인증을 진행할 예정
        </EcosystemPartner>
      </Col>
    </Row>
  </section>
)
