export default () => (
  <div className="background">
    <style jsx>{`
      .background {
        position: absolute;
        background-image: url("/static/img-background.png");
        width: 1272px;
        height: 1298px;
        top: -600px;
        right: -300px;
        z-index: -10;
      }
      @media (max-width: 768px) {
        .background {
          right: -1000px;
        }
      }
    `}</style>
  </div>
)
