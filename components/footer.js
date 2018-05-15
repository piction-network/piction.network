export default ({ contact }) => (
  <footer>
    <h3 className="footer__heading">{contact}</h3>

    <div className="footer__contact">
      <ul>
        <li><a href="https://medium.com/piction" target="_blank">Medium</a></li>
        <li><a href="https://t.me/piction_kr" target="_blank">Telegram</a></li>
        <li><a href="https://open.kakao.com/o/gyVQbDM" target="_blank">Kakaotalk</a></li>
        <li><a href="mailto:contact@piction.network">contact@piction.network</a></li>
      </ul>
    </div>

    <div className="footer__copyright">
      &copy; 2018 Battle Entertainment. All rights reserved
    </div>
    <style jsx>{`
      footer {
        text-align: center;
        padding-bottom: 20px;
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

      .footer__copyright {
        color: #444444;
        font-size: 14px;
      }
    `}</style>
  </footer>
)
