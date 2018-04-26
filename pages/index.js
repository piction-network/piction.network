import Page from "../components/page";

import Hero from "../components/hero";
import Footer from  "../components/footer";
import Unit from "../components/unit";

export default () => (
  <Page>
    <Hero />
    <section id="for-creator">
      <div>
        <div className="section__listing">
          <span>01</span>
        </div>
        <h2>창작자를 위한 자유로운 환경</h2>
        <p>
          그동안 중앙화된 웹툰, 웹소설 플랫폼에서 작품은 작가가 만들었지만 작품 연재 방식 및 원고료, 판매 방식, 프로모션 등은 모두 플랫폼에서 결정하고 관리해왔습니다. 플랫폼의 작품 선택 기준에 따라 작품에 가치가 달라지기 때문에 창작자들은 한정된 숫자의 플랫폼에서 연재하기 위해서 원하지 않는 소재, 원하지 않는 장르의 작품을 만들 수밖에 없었습니다. 우리는 작품의 가치는 플랫폼이 재단할 수 없고, 작품의 창작자가 작품에 대한 모든 권한을 가져야 한다고 생각합니다. Piction에서는 작품의 소재 및 장르, 연재 방식, 프로모션 등 작품과 관련한 모든 권리를 작가에게 부여하고자 합니다.
        </p>
      </div>
    </section>

    <section id="fair">
      <div>
        <div className="section__listing">
          <span>02</span>
        </div>
        <h2>작품의 공정한 평가</h2>
        <p>
          Piction에서는 누구나 작품을 등록하고 공개할 수 있으며, 플랫폼이 개입하지 않고 오로지 독자들의 참여를 통해서만 작품을 평가받습니다. 독자들이 직접 참여한 평가 데이터를 바탕으로 작가는 작품에 대한 원고료를 펀딩받고 적절한 가격에 판매할 수 있습니다. Piction에서 독자는 단순히 작품을 소비하는 것뿐만이 아니라 작품의 가치를 판단하고 숨겨져 있는 작품을 발굴하는 역할도 담당하며, 작품 평가에 참여한 모든 독자에게 가상화폐로 보상을 제공합니다.
        </p>
      </div>
      <img src="/static/fair.svg" />
    </section>

    <section id="blockchain">
      <div>
        <div className="section__listing">
          <span>03</span>
        </div>
        <h2>블록체인 기술을 통한 투명한 콘텐츠 거래</h2>
        <p>
          Piction에서는 블록체인 기술을 통해 창작자와 소비자가 제삼자를 통하지 않고 직접 거래할 수 있습니다. 기존 콘텐츠 플랫폼에서는 독자가 콘텐츠를 구매하면 1달 단위의 정산 절차가 필요했지만, Piction에서는 콘텐츠 구매가 발생하는 즉시 작가에게 매출이 지급됩니다. 또한, 블록체인 기술 덕분에 플랫폼 비용 절감이 가능해져 기존 중앙화된 웹툰, 웹소설 플랫폼과 대비하여 독자는 더욱 저렴한 비용으로 콘텐츠를 구매할 수 있고 작가는 동일 판매 대비 더 높은 매출을 얻을 수 있게 되었습니다.
        </p>
      </div>
      <img src="/static/blockchain.svg" />
    </section>

    <section id="powered-by">
      <div>
        <div className="section__listing">
          <span>04</span>
        </div>
        <h2>Powered by Battle Entertainment</h2>
        <p>
          Piction은 한국과 중국에서 웹툰 기반의 IP 비즈니스를 펼치고 있는 배틀엔터테인먼트가 만듭니다. 5년간 웹툰 및 콘텐츠 플랫폼을 운영하고 해외 콘텐츠를 국내외 유통하고 제작해온 배틀엔터테인먼트의 경험과 노하우를 바탕으로 Piction이 가장 먼저 블록체인 기반 웹툰, 웹소설 플랫폼을 시작합니다.
        </p>
      </div>
      <img src="/static/battleent.svg" />
    </section>

    <Footer />

    <style jsx>{`
      section {
        display: flex;
        justify-content: space-between;
        margin-bottom: 120px;
      }
      section h2 {
        font-size: 42px;
        margin-top: 9px;
        margin-bottom: 24px;
      }
      section p {
        font-size: 18px;
        color: #444444;
        line-height: 1.5;
        max-width: 800px;
        margin-right: 24px;
      }
      .section__listing {
        color: #0045e3;
        font-size: 32px;
        font-weight: bold;
      }

      @media (max-width: 768px) {
        section#blockchain {
          flex-direction: column;
        }
      }

      @media (max-width: 640px) {
        section {
          flex-direction: column;
        }
        section p {
          font-size: 16px;
          text-align: justify;
          margin-right: 0;
        }
        .section__listing {
          font-size: 22px;
        }
        section h2 {
          font-size: 28px;
          margin-top: 9px;
          margin-bottom: 24px;
        }
      }
    `}</style>
  </Page>
);

