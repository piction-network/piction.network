export default ({children}) => (
  <h2>
    <span>{children}</span>
    <style jsx>{`
      h2 {
        font-size: 42px;
        text-align: center;
        margin-bottom: 2em;
      }
      h2 span {
        border-bottom: 4px solid #444;
      }
      @media (max-width: 640px) {
        h2 {
          font-size: 28px;
        }
        h2 span {
          border-bottom: 2px solid #444;
        }
      }
    `}</style>
  </h2>
)
