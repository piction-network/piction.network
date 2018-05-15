import locale from "../../locale/teams/ko";
import { Row, Col } from "../flexbox";
import SectionHeading from "../SectionHeading";

const Member = ({member}) => (
  <div className="member">
    <img className="member__photo" src={member.photo} />
    <h6 className="member__name">{member.name}</h6>
    <small className="member__title">{member.title}</small>
    <p className="member__career" dangerouslySetInnerHTML={member.career}/>
    <div className="member__links">

    </div>
    <style jsx>{`
      .member {
        text-align: center;
        padding: 1em;
      }
      .member__photo {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.08);
        filter: grayscale(100%);
      }
      .member__name {
        font-size: 20px;
        margin: 0;
      }
      .member__title {
        font-size: 14px;
        color: #9b9b9b;
      }
      .member__career {
        font-size: 12px;
        color: #333333;
      }
    `}</style>
  </div>
)

export default class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
    this.expandTeams = this.expandTeams.bind(this);
  }

  teams() {
    return this.state.collapsed ? locale.teams.slice(0, 8) : locale.teams;
  }

  expandTeams() {
    this.setState({collapsed: !this.state.collapsed});
  }

  render() {
    const list = this.teams().map((member, index) => {
      return (
        <Col sm={12} md={6} lg={3} key={index}>
          <Member member={member} />
        </Col>
      )
    });

    return (
      <section id="teams">
        <SectionHeading>Teams</SectionHeading>
        <Row>
          { list }
        </Row>
        <button onClick={this.expandTeams}>Toggle</button>
      </section>
    )
  }
}
