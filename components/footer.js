import SectionHeading from "./SectionHeading";

export default ({ contact }) => (
  <footer>
    <SectionHeading>{contact}</SectionHeading>

    <div className="footer__contact">
      <ul>
        <li><a href="mailto:contact@piction.network">contact@piction.network</a></li>
      </ul>
    </div>

    <div className="footer__copyright">
      &copy; 2018 Piction Protocol. All rights reserved
    </div>
    <style jsx>{`
      footer {
        text-align: center;
        padding-top: 80px;
        padding-bottom: 20px;
        background-image: url("/static/img-background.png");
        background-repeat: no-repeat;
        background-position-x: -400px;
      }

      @media (max-width: 768px) {
        footer {
          background-position-x: -670px;
        }
      }

      footer h3 {
        font-size: 32px;
        font-weight: bold;
      }

      footer a {
        color: #ff793f;
        font-size: 18px;
        text-decoration: none;
      }

      footer a:hover {
        color: #ff6928;
      }

      .footer__contact {
        margin-bottom: 120px;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      li + li {
        margin-top: 1em;
      }

      .footer__copyright {
        color: #444444;
        font-size: 14px;
      }
    `}</style>
  </footer>
)
