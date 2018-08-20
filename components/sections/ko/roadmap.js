import SectionHeading from "../../SectionHeading";

const Milestone = ({time, title, side, children}) => (
  <div className="milestone" data-side={side}>
    <div className="milestone__marker">
      {time}
    </div>
    <div className="milestone__description">
      <h4>{title}</h4>
      {children}
    </div>
    <style jsx>{`
    .milestone {
      position: relative;
      box-sizing: content-box;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
    }

    .milestone[data-side="left"] {
      width: 50%;
      border-right: 2px solid #e1e1e1;
    }

    .milestone[data-side="right"] {
      margin-left: 50%;
      width: 50%;
      border-left: 2px solid #e1e1e1;
    }

    .milestone__description {
      padding: 1em;
      box-shadow: var(--box-shadow);
      border-radius: 8px;
      font-size: 0.875em;
    }
    .milestone__description h4 {
      color: var(--color-primary);
      font-size: 1rem;
      margin-top: 0;
    }

    [data-side="left"] .milestone__description {
      margin-right: 80px;
    }

    [data-side="right"] .milestone__description {
      margin-left: 80px;
    }

    .milestone__marker {
      border: 8px solid white;
      color: var(--color-white);
      width: 88px;
      height: 88px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      background-color: var(--color-primary);
      text-align: center;
    }

    [data-side="left"] .milestone__marker {
      right: 0;
      transform: translateX(50%) translateY(50%);
    }

    [data-side="right"] .milestone__marker {
      left: 0;
      transform: translateX(-50%) translateY(50%);
    }

    @media (max-width: 768px) {
      .milestone[data-side="left"] {
        margin-left: 0;
        width: 100%;
        border-right: none;
        border-left: 2px solid #e1e1e1;
      }

      .milestone[data-side="right"] {
        width: 100%;
        margin-left: 0;
        border-left: 2px solid #e1e1e1;
      }
      .milestone__marker {
        border: none;
        width: 50px;
        height: 50px;
        font-size: 0.8em;
        padding: 0.25em;
      }

      [data-side="left"] .milestone__description {
        margin-right: 0;
        margin-left: 40px;
      }

      [data-side="right"] .milestone__description {
        margin-right: 0;
        margin-left: 40px;
      }

      [data-side="left"] .milestone__marker {
        left: 0;
        transform: translateX(-50%) translateY(50%);
      }

      [data-side="right"] .milestone__marker {
        left: 0;
        transform: translateX(-50%) translateY(50%);
      }
    }

    `}</style>
  </div>
)

export default () => (
  <section id="roadmap">
    <SectionHeading>Roadmap</SectionHeading>
    <ul>
      <li>
        <Milestone time="2018 Q3" title="테스트넷" side="left">
        Piction 생태계의 퍼블릭 테스트넷이 런칭될 예정입니다. 기본적인 거래의 일관성, 스마트 컨트랙트의 신뢰성, 해킹의 예방을 테스트하고 검증하여 생태계의 신뢰성을 검증합니다.
        </Milestone>
      </li>
      <li>
        <Milestone time="2018 Q4" title="베타 서비스 출시 + 초기 콘텐츠 확보" side="right">
        직접적인 콘텐츠 거래가 가능한 간단한 형태의 마켓 플레이스를 탑재한 버전이 출시될 것입니다. 생태계의 초기 콘텐츠를 확보하고 시범적인 판매를 진행할 예정입니다.
        </Milestone>
      </li>
      <li>
        <Milestone time="2019 Q1" title="v0.5" side="left">
        후원자와 마케터를 위한 스마트컨트랙트가 출시될 예정입니다. 핵심인 작품에 대한 투자 기능을 구현합니다.
        </Milestone>
      </li>
      <li>
        <Milestone time="2019 Q2" title="v1.0" side="right">
        컨텐츠 등록 및 후원자 모집에서 판매에 이르기까지 전체 프로세스가 구현된 정식 버전을 출시할 것입니다.
        </Milestone>
      </li>
    </ul>
    <style jsx>{`
    #roadmap {
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 3em;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    `}</style>
  </section>
)
