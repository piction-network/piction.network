import Meta from "./meta";
import Navigation from "./nav";


import Footer from  "./footer";

export default ({ locale, children }) => (
  <div>
    <Meta locale={locale} />
    <Navigation selected={locale.selected}/>

    {children}

    <Footer contact={locale.contact} />
    <style jsx>{`
      .peoples {
        background-image: url("/static/img-background-platonic.jpg");
        background-repeat: no-repeat;
        background-position: right;
        padding-bottom: 2em;
      }
    `}</style>
    <style jsx global>{`
    :root {
      --color-primary: #0045e3;
      --color-secondary: #ff793f;
      --color-black: #222222;
      --color-gray: #444444;
      --color-light-gray: #707070;
      --color-white: #FFFFFF;
      --box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.08);
      --font-family-title: "Poppins", 'Apple SD Gothic Neo', "Nanum Gothic", sans-serif;
      --font-family-body: "Open Sans", 'Apple SD Gothic Neo', "Nanum Gothic", sans-serif;
      --breakpoint-md: 768px;
      --breakpoint-sm: 600px;
    }

    * {
      box-sizing: border-box;
      font-family: var(--font-family-body);
      color: var(--color-black);
      scroll-behavior: smooth;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-family-title);
    }
    html {
      line-height: 1.5;
      -webkit-text-size-adjust: 100%;
    }
    body {
      margin: 0;
    }
    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }
    a {
      font-family: var(--font-family-body);
      background-color: transparent;
      color: var(--color-black);
      text-decoration: none;
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

    section {
      padding-top: 90px;
    }
    .page {
      position: relative;
      max-width: 1256px;
      padding: 0 16px;
      margin: auto;
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
);

