export default ({sm, md, lg, children}) => (
  <div className={`col-sm-${sm} col-md-${md} col-lg-${lg}`}>
    {children}
    <style jsx>{`
      .col-lg-6 {
        box-sizing: border-box;
        flex: 0 0 auto;
        flex-basis: 50%;
        max-width: 50%;
      }
      .col-lg-3 {
        box-sizing: border-box;
        flex: 0 0 auto;
        flex-basis: 25%;
        max-width: 25%;
      }
      @media (max-width: 768px) {
        .col-md-12 {
          box-sizing: border-box;
          flex: 0 0 auto;
          flex-basis: 100%;
          max-width: 100%;
        }
        .col-md-6 {
          box-sizing: border-box;
          flex: 0 0 auto;
          flex-basis: 50%;
          max-width: 50%;
        }
        .col-md-3 {
          box-sizing: border-box;
          flex: 0 0 auto;
          flex-basis: 25%;
          max-width: 25%;
        }
      }
      @media (max-width: 640px) {
        .col-sm-12 {
          box-sizing: border-box;
          flex: 0 0 auto;
          flex-basis: 100%;
          max-width: 100%;
        }
        .col-sm-6 {
          box-sizing: border-box;
          flex: 0 0 auto;
          flex-basis: 50%;
          max-width: 50%;
        }
        .col-sm-3 {
          box-sizing: border-box;
          flex: 0 0 auto;
          flex-basis: 25%;
          max-width: 25%;
        }
      }
   `}</style>
  </div>
)
