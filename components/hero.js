export default ({message}) => (
  <div className="hero">
    <img src="/static/logo.svg" className="hero__logo" />
    <h1 className="hero__heading">{message}</h1>

    <style jsx>{`
      .hero {
        padding-top: 68px;
        height: 640px;
      }
      .hero__heading {
        margin-top: 96px;
        font-size: 54px;
        max-width: 600px;
        line-height: 1.4;
        font-weight: bold;
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
      }
    `}</style>
  </div>
)
