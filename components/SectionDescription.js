export default ({children}) => (
  <div>
    {children}
    <style jsx>{`
    text-align: center;
    color: var(--color-gray);
    font-size: 1.2em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
    max-width: 650px;
    @media (max-width: 768px) {
      font-size: 1em;
    }
    `}</style>
  </div>
)
