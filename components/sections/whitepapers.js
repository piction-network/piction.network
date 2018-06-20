import { Row, Col } from "../flexbox";
import SectionHeading from "../SectionHeading";
import SectionDescription from "../SectionDescription";

export default () => (
  <section id="whitepapers">
    <SectionHeading>Foundational Documents</SectionHeading>
    <SectionDescription>
      Coming soon
      {/* To help you gain a deeper understanding of Piction Network, our team has prepared 3 papers for your review. */}
    </SectionDescription>
    <style jsx>{`
    #whitepapers {
      background-color: #f8f8f8;
      padding: 1em;
      padding-top: 80px;
      padding-bottom: 40px;
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
