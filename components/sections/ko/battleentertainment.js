import SectionHeading from "../../SectionHeading";
import { Row, Col } from "../../flexbox";

const Number = ({prefix, number, label, children}) => (
  <div className="number">
    <div className="number__prefix">{prefix}</div>
    <div className="number__value">{number}</div>
    <div className="number__description">{label}</div>
    {children}
    <style jsx>{`
    text-align: center;
    .number {
      font-size: 0.8em;
    }

    .number__prefix {
      color: var(--color-gray);
    }

    .number__value {
      color: var(--color-primary);
      font-size: 2em;
      font-weight: bold;
    }
    .number__description {
      color: var(--color-gray);
    }
    `}</style>
  </div>
)

const Investor = ({name, ci, href, children}) => (
  <div className="investor">
    <a href={href}>
      <img src={ci} alt={name} />
    </a>
    <p>{children}</p>
    <style jsx>{`
    text-align: center;

    img {
      height: 80px;
      width: 100px;
      object-fit: contain;
      display: block;
      margin: 0 auto;
    }
    p {
      font-size: 0.7em;
      color: var(--color-light-gray);
    }
    @media (max-width: 768px) {
      img {
        width: 180px;
        height: 80px;
      }
    }
    `}</style>
  </div>
)


export default () => (
  <section id="battle-entertainment">
    <SectionHeading>Led by Battle Entertainment</SectionHeading>
    <div className="battleentertainment">
      <img src="/static/battleent.svg" alt="Battle Entertainment" />
      <p className="battleentertainment__description">
        Piction Network는 <a href="https://www.battleent.com">Battle Entertainment</a>와 함께 합니다. 한국과 중국에서 지난 5년간 웹툰 비즈니스를 성공적으로 진행하고 있는 Battle Entertainment는, 복수의 유명 벤쳐캐피탈들로부터 투자유치하며 그 성과를 입증한 바 있습니다 . 기존 배틀엔터테인먼트의 사업 부문인 콘텐츠 제작, 유통, 플랫폼 사업부문은 각각 Piction Network의 초기 생태계 파트너로 함께 하게 됩니다. 
      </p>
      <style jsx>{`
        img {
          width: 200px;
          height: 80px;
        }
        a {
          color: var(--color-secondary);
        }
        .battleentertainment {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .battleentertainment__description {
          color: var(--color-gray);
        }
        @media (max-width: 768px) {
          font-size: 1rem;
        }
      `}</style>
    </div>

    <div className="numbers">
      <Row>
        <Col lg={3} md={12}>
          <Number number="773,000,000+" label="누적 작품 조회수 (한국)" />
        </Col>
        <Col lg={3} md={12}>
          <Number number="18,000,000+" label="누적 방문자 수 (한국)" />
        </Col>
        <Col lg={3} md={12}>
          <Number number="37,000,000+" label="누적 구독자 수 (중국)" />
        </Col>
        <Col lg={3} md={12}>
          <Number number="9,000,000+ USD" label="누적 투자금액" />
        </Col>
      </Row>
      <style jsx>{`
      .numbers {
        margin-top: 40px;
      }
      `}</style>
    </div>
    <div className="investments">
      <Row>
        <Col lg={2} md={12}>
          <Investor name="Smilegate Investment" ci="/static/investors/smilegate-investment.jpg" href="http://www.smilegateinvestment.com/">
            전세계 6.5억 명의 가입자를 보유한 글로벌 No.1 FPS 게임인 "CrossFire"의 개발사, 스마일게이트의 투자 전문 자회사, 배틀엔터테인먼트의 세차례 펀딩, 모든 단계에 투자자로서 참여
          </Investor>
        </Col>
        <Col lg={2} md={12}>
          <Investor name="Industrial Bank of Korea" ci="/static/investors/ibk.jpg" href="https://www.ibk.co.kr/">
          국책 은행으로는 이례적으로 배틀엔터테인먼트에 직접투자를 집행 
          </Investor>
        </Col>
        <Col lg={2} md={12}>
          <Investor name="KTB Networks" ci="/static/investors/ktb.png" href="http://www.ktbnetwork.com/">
          1981년 설립된 국내 1세대 벤쳐캐피털. 배달의민족, 토스, 영화사 NEW, 중국의 투도우 등의 투자사 
          </Investor>
        </Col>
        <Col lg={2} md={12}>
          <Investor name="IMM Investment" ci="/static/investors/imm.jpg" href="http://imm.co.kr/">
          약 3조원에 달하는 AUM, 국내 최고의 PEF 운용사이자 벤쳐캐피탈
          </Investor>
        </Col>
        <Col lg={2} md={12}>
          <Investor name="Union Investment" ci="/static/investors/union.jpg" href="http://www.unionip.net/">
          '신과함께', '명량' 등에 투자한 국내 최고의 콘텐츠 전문 벤쳐캐피탈
          </Investor>
        </Col>
        <Col lg={2} md={12}>
          <Investor name="Angang Venture Investment" ci="/static/investors/angang.png">
          중국, 게임, 엔터테인먼트 등에 강점을 지닌 벤쳐캐피탈 
          </Investor>
        </Col>
      </Row>
      <style jsx>{`
      .investments {
        margin-top: 40px;
      }
      `}</style>
    </div>
  </section>
)
