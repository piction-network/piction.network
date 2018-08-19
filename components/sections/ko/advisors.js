import locale from "../../../locale/advisors/ko";
import { Row, Col } from "../../flexbox";
import SectionHeading from "../../SectionHeading";

const Advisor = ({name, bio, comment, photo}) => (
  <div className="advisor">
    <div className="advisor__info">
      <img className="advisor__photo" src={photo} alt={name} />
      <div className="advisor__profile">
        <h6 className="advisor__name">{name}</h6>
        <p className="advisor__bio" dangerouslySetInnerHTML={bio} />
      </div>
    </div>
    <p className="advisor__testimony" dangerouslySetInnerHTML={comment} />

    <style jsx>{`
    .advisor {
      padding: 1em;
      margin-bottom: 3em;
    }
    .advisor__info {
      display: flex;
      flex-direction: row;
      margin-bottom: 1em;
    }

    .advisor__photo {
      line-height: 0;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.08);
      filter: grayscale(100%);
      flex-grow: 0;
      flex-shrink: 0;
    }

    .advisor__profile {
      margin-left: 1em;
    }

    .advisor__name {
      font-size: 1.1em;
      margin: 0.25em 0;
    }
    .advisor__bio {
      color: var(--color-primary);
      font-size: 0.7em;
      margin: 0;
    }
    .advisor__testimony {
      color: var(--color-gray);
      font-size: 0.9em;
    }
    @media (max-width: 640px) {
      .advisor {
        margin-bottom: 2em;
      }
      .advisor__info {
        margin-left: 0;
      }
      .advisor__photo {
        width: 100px;
        height: 100px;
      }
    }

    `}</style>
  </div>
)

export default class Advisors extends React.Component {
  render() {
    const list = locale.advisors.map((advisor, index) => {
      return (
        <Col lg={4} md={12} sm={12} key={index}>
          <Advisor name={advisor.name} bio={advisor.bio} photo={advisor.photo} comment={advisor.comment} />
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
