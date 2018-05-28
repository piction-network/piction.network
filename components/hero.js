export default ({locale}) => (
  <div className="hero">
    <img src="/static/logo.png" className="hero__logo" />
    <p className="hero__message" dangerouslySetInnerHTML={locale.message} />
    <ul className="hero__whitepapers">
      <li><a className="btn" href={locale.whitepaper.link} target="_blank">{locale.whitepaper.button}</a></li>
      <li><a className="btn" href={locale.onepager.link} target="_blank">{locale.onepager.button}</a></li>
    </ul>

    <style jsx>{`
      .hero {
        padding-top: 68px;
        margin-bottom: 4em;
      }
      .hero__logo {
        width: 334px;
        height: 108px;
        display: block;
        margin: 0 auto;
      }
      .hero__message {
        font-size: 1.4em;
        margin-top: 96px;
        margin-bottom: 96px;
        margin-left: auto;
        margin-right: auto;
        max-width: 800px;
        line-height: 1.4;
        word-break: break-word;
      }
      .hero__whitepapers {
        list-style: none;
        padding: 0;
        text-align: center;
      }
      .hero__whitepapers li {
        display: inline;
      }
      .hero__whitepapers li + li {
        margin-left: 1em;
      }
      .btn {
        text-decoration: none;
        color: white;
        background-color: #4a4a4a;
        padding: 1em 2em;
        box-shadow: var(--box-shadow);
        display: inline-block;
      }

      @media (max-width: 768px) {
        .hero {
          padding-top: 36px;
          height: 500px;
        }
        .hero__message {
          margin-top: 64px;
        }
      }
      @media (max-width: 640px) {
        .hero {
          padding-top: 28px;
          height: auto;
        }
        .hero__logo {
          width: 143px;
          height: 46px
        }
        .hero__message {
          margin-top: 55px;
        }
        .hero__whitepapers {
          text-align: center;
        }
        .hero__whitepapers li {
          display: block;
        }
        .hero__whitepapers li + li {
          margin-left: 0;
          margin-top: 1em;
        }
      }
    `}</style>
  </div>
)
