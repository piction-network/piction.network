import locale from "../../locale/advisors/ko";
import { Row, Col } from "../flexbox";
import SectionHeading from "../SectionHeading";

const Advisor = ({name, bio, photo}) => (
  <div className="advisor">
    <div className="advisor__photo">
      <img src={photo} />
    </div>
    <div className="advisor__info">
      <h6 className="advisor__name">{name}</h6>
      <p className="advisor__bio" dangerouslySetInnerHTML={bio} />
    </div>
    <style jsx>{`
    .advisor {
      display: flex;
      flex-grow: 1;
      margin-bottom: 2em;
      line-height: 0;
    }
    .advisor__info {
      flex-grow: 1;
      margin-left: 2em;
      line-height: 1.5;
    }
    .advisor__name {
      font-size: 22px;
      margin: 0.25em 0;
    }
    .advisor__bio {
      color: #444444;
    }
    .advisor__photo img {
      line-height: 0;
      margin: 0 auto;
      border-radius: 50%;
      width: 164px;
      height: 164px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.08);
      filter: grayscale(100%);
    }

    @media (max-width: 640px) {
      .advisor {
        flex-direction: column;
        text-align: center;
      }
      .advisor__info {
        margin-left: 0;
      }
      .advisor__photo img {
        width: 130px;
        height: 130px;
      }
    }

    `}</style>
  </div>
)

export default class Advisors extends React.Component {
  render() {
    const list = locale.advisors.map((advisor, index) => {
      return (
        <Col lg={6} md={12} sm={12} key={index}>
          <Advisor name={advisor.name} bio={advisor.bio} photo={advisor.photo} />
        </Col>
      )
    })

    return (
      <section id="advisors">
        <SectionHeading prefix="These are our">ADVISORS</SectionHeading>
        <Row>
          { list }
        </Row>
      </section>
    )
  }
}
