export default () => (
  <div className="wrapper">
    <div className="circle">
      <div className="unit">
      </div>
    </div>
    <style jsx>{`
      @media (max-width: 1000px) {
        .wrapper {
          display: none;
        }
      }

      .wrapper {
        position: relative;
      }
      .circle {
        position: absolute;
        top: 0;
        right: 0;
        height: 630px;
        width: 630px;
        background-image: url("/static/img-circle.png");
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .unit {
        width: 410px;
        height: 293px;
        background-image: url("/static/img-illust-title.png");
        background-position: center;
      }
    `}</style>
  </div>
)
