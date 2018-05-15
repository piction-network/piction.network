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
        font-size: 18px;
        margin-top: 0.25em;
        margin-bottom: 0.1em;
      }
      .member__title {
        font-size: 12px;
        color: #9b9b9b;
      }
      .member__career {
        font-size: 12px;
        color: #707070;
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
      <section id="teams" className="teams">
        <SectionHeading>Teams</SectionHeading>
        <Row>
          { list }
        </Row>
        <div className="teams__collapse">
          <div className="teams__divider" />
          <button onClick={this.expandTeams}>{ this.state.collapsed ? "See more" : "See less" }</button>
        </div>
        <style jsx>{`

        .teams__collapse {
          text-align: center;
          position: relative;
        }
        .teams__divider {
          width: 100%;
          margin: 0 auto;
          border-top: 1px solid #0045e3;
          position: absolute;
          top: 1.8em;
          z-index: -1;
        }
        .teams__collapse button {
          appearance: none;
          border:none;
          cursor: pointer;
          color: #0045e3;
          font-size: 20px;
          font-weight: bold;
          background-color: white;
          padding: 1em;
        }
        .teams__collapse button:focus {
          outline: none;
        }
        `}</style>
      </section>
    )
  }
}
