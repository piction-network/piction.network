export default ({prefix, subfix, children}) => (
  <div className="section-heading">
    <h2>
      <small>{prefix}</small>
      <span>{children}</span>
      <small>{subfix}</small>
    </h2>
    <style jsx>{`
    .section-heading {
      text-align: center;
      margin-bottom: 1em;
    }
    h2 {
      font-size: 42px;
      text-align: center;
      margin: 0;
    }
    h2 small {
      display: block;
      font-size: 0.4em;
      font-weight: normal;
    }
    h2 span {
      border-bottom: 6px solid var(--color-primary);
      padding-bottom: 4px;
      margin-bottom: 4px;
      display: inline-block;
      font-family: var(--font-family-title)
    }
    @media (max-width: 640px) {
      h2 {
        font-size: 28px;
      }
      h2 span {
        border-bottom: 2px solid var(--color-primary);
      }
    }
    `}</style>
  </div>
)
