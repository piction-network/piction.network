import SectionHeading from "./SectionHeading";

export default ({ contact }) => (
  <footer>
    <SectionHeading>{contact}</SectionHeading>

    <div className="footer__contact">
      <ul>
        <li>
          <a className="footer__telegram" href="https://t.me/pictionnetwork">Telegram Channel</a>
        </li>
        <li>
          <a href="mailto:contact@piction.network">contact@piction.network</a>
        </li>
      </ul>
    </div>

    <div className="footer__copyright">
      &copy; 2018 Piction Network. All rights reserved
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
        margin-top: 80px;
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

      footer .footer__telegram {
        display: inline-block;
        color: var(--color-white);
        background-color: var(--color-primary);
        padding: 1em 2em;
        border-radius: 2em;
        color: var(--color-white);
        box-shadow: var(--box-shadow);
        margin-bottom: 1em;
      }

      footer .footer__telegram:hover {
        color: var(--color-white);
      }
    `}</style>
  </footer>
)
