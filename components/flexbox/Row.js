export default ({children}) => (
  <div className="row">
    {children}
    <style jsx>{`
    .row {
      box-sizing: border-box;
      display: flex;
      flex: 0 1 auto;
      flex-direction: row;
      flex-wrap: wrap;
    }
    `}</style>
  </div>
)
