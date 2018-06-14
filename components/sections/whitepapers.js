import { Row, Col } from "../flexbox";
import SectionHeading from "../SectionHeading";
import SectionDescription from "../SectionDescription";

export default () => (
  <section id="whitepapers">
    <SectionHeading>Foundational Documents</SectionHeading>
    <SectionDescription>
      To help you gain a deeper understanding of Piction Network, our team has prepared 3 papers for your review.
    </SectionDescription>
    <Row>
      <Col sm={12} md={6} lg={4}>
        <div className="center">
          <img src="/static/img-whitepaper.png" />
          <h3>Whitepaper</h3>
          <ul>
            <li><a className="btn" href="https://docs.google.com/document/d/1UC7GOFkv56_THFZset4QXlOmaGnhFRvufEiU3pDyBzc/edit?usp=sharing" target="_blank">Korean</a></li>
            <li><a className="btn" href="https://docs.google.com/document/d/1LSoXNBz_1tKlgFyb5Tv-75keYZHqB7ZU-OhC9YF-6NU/edit?usp=sharing" target="_blank">English</a></li>
          </ul>
        </div>
      </Col>
      <Col sm={12} md={6} lg={4}>
        <div className="center">
          <img src="/static/img-whitepaper.png" />
          <h3>Token economy Whitepaper</h3>
          <p>To be announced</p>
        </div>
      </Col>
      <Col sm={12} md={6} lg={4}>
        <div className="center">
          <img src="/static/img-onepager.png" />
          <h3>One-pager</h3>
          <ul>
            <li><a className="btn" href="/static/docs/piction-onepager-20180614.pdf" target="_blank">English</a></li>
          </ul>
        </div>
      </Col>
    </Row>
    <style jsx>{`
    #whitepapers {
      background-color: #f8f8f8;
      padding: 1em;
      padding-top: 80px;
    }
    .center {
      text-align: center;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    .btn {
      margin: 1em;
      padding: 1em;
      display: inline-block;
      min-width: 50%;
      color: #ffffff;
      font-weight: bold;
      text-decoration: none;
      background-color: #4a4a4a;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.08);
    }
    `}</style>
  </section>
)
