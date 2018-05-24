import Meta from "./meta";
import Background from "../components/background";
import Unit from "../components/unit";
import Sparkles from "../components/sparkles";

export default ({ locale, children }) => (
  <div className="main">
    <Meta locale={locale} />

    <div className="page">
      <Sparkles />
      <Background />
      <Unit />

      { children }
    </div>

    <style jsx global>{`

      * {
        box-sizing: border-box;
        font-family: "Open Sans", 'Apple SD Gothic Neo', "Nanum Gothic", sans-serif;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: "Poppins", 'Apple SD Gothic Neo', "Nanum Gothic", sans-serif;
      }
      html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
      }
      body {
        margin: 0;
      }
      h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }
      a {
        background-color: transparent;
      }

      b,
      strong {
        font-weight: bolder;
      }

      small {
        font-size: 80%;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
          font-family: inherit; /* 1 */
          font-size: 100%; /* 1 */
          line-height: 1.15; /* 1 */
          margin: 0; /* 2 */
      }

      button,
      input { /* 1 */
          overflow: visible;
      }

      button,
      select { /* 1 */
          text-transform: none;
      }

      button,
      [type="button"],
      [type="reset"],
      [type="submit"] {
          -webkit-appearance: button;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
          border-style: none;
          padding: 0;
      }

      button:-moz-focusring,
      [type="button"]:-moz-focusring,
      [type="reset"]:-moz-focusring,
      [type="submit"]:-moz-focusring {
          outline: 1px dotted ButtonText;
      }
      [type="checkbox"],
      [type="radio"] {
          box-sizing: border-box; /* 1 */
          padding: 0; /* 2 */
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
          height: auto;
      }

      [type="search"] {
          -webkit-appearance: textfield; /* 1 */
          outline-offset: -2px; /* 2 */
      }

      [type="search"]::-webkit-search-decoration {
          -webkit-appearance: none;
      }

      [hidden] {
          display: none;
      }

      .page {
        position: relative;
        max-width: 1256px;
        padding: 0 16px;
        margin: auto;
      }
      .main {
        border-top: 4px solid #0045e3;
        overflow: hidden;
      }

      @media (max-width: 1000px) {
        .page {
          padding: 0 48px;
        }
      }

      @media (max-width: 640px) {
        .page {
          padding: 0 24px;
        }
      }

    `}</style>
  </div>
)
