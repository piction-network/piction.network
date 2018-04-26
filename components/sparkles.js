export default () => (
  <div className="sparkles">
    <div className="sparkles__left" />
    <div className="sparkles__center" />
    <div className="sparkles__right" />

    <style jsx>{`
      .sparkles {
        position: absolute;
        width: 100%;
        height: 790px;
      }
      .sparkles__left {
        top: 291px;
        left: -60px;
        position: absolute;
        width: 31px;
        height: 255px;
        background-image: url("/static/img-pattern-left.png");
        background-size: contain;
      }
      .sparkles__center {
        top: 100px;
        left: 350px;
        position: absolute;
        width: 280px;
        height: 482px;
        background-image: url("/static/img-pattern-center.png");
        background-size: contain;
      }
      .sparkles__right {
        right: 0;
        top: 450px;
        position: absolute;
        width: 183px;
        height: 181px;
        background-image: url("/static/img-pattern-right.png");
        background-size: contain;
      }

      @media (max-width: 768px) {
        .sparkles__left {
          top: 240px;
          left: -20px;
        }
        .sparkles__center {
          top: 30px;
          right: 50px;
          left: auto;
        }
        .sparkles__right {
          display: none;
        }
      }

      @media (max-width: 640px) {
        .sparkles__left {
          display: none;
        }
        .sparkles__center {
          width: 140px;
          height: 241px;
          top: 70px;
          right: 50px;
          left: auto;
        }
      }
    `}</style>
  </div>
);
