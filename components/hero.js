export default ({locale}) => (
  <div className="hero">
    <img src="/static/logo.svg" className="hero__logo" />
    <h1 className="hero__heading">{locale.message}</h1>
    <ul className="hero__whitepapers">
      <li><a className="btn" href={locale.whitepaper.link} target="_blank">{locale.whitepaper.button}</a></li>
      <li><a className="btn" href={locale.onepager.link} target="_blank">{locale.onepager.button}</a></li>
    </ul>

    <style jsx>{`
      .hero {
        padding-top: 68px;
        margin-bottom: 4em;
      }
      .hero__heading {
        margin-top: 96px;
        font-size: 54px;
        max-width: 600px;
        line-height: 1.4;
        font-weight: bold;
        word-break: break-word;
      }
      .hero__whitepapers {
        list-style: none;
        padding: 0;
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
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.08);
        display: inline-block;
      }

      @media (max-width: 768px) {
        .hero {
          padding-top: 36px;
          height: 500px;
        }
        .hero__heading {
          margin-top: 64px;
          font-size: 48px;
        }
      }
      @media (max-width: 640px) {
        .hero {
          padding-top: 28px;
          height: auto;
        }
        .hero__logo {
          width: 143px;
          height: 36px
        }
        .hero__heading {
          margin-top: 55px;
          font-size: 32px;
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
