import Head from "next/head";

export default ({locale}) => (
  <Head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-123283620-1"></script>
    <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-123283620-1');`}} />

    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="title" content="Piction Network" />
    <meta name="description" content="Piction Network is creating a new peer to peer digital contents ecosystem. We are disrupting the centralized models of content distribution dominated by extractive intermediaries" />
    <meta name="keywords" content="Piction, Piction ico, Piction blockchain, PXL token, PXL coin, Contents blockchain" />

    <meta name="og:locale" content="en" />
    <meta name="og:title" content="Piction Network" />
    <meta name="og:type" content="website" />
    <meta name="og:url" content="https://piction.network/" />
    <meta name="og:image" content="/static/og.png" />
    <meta name="og:description" content="Piction Network is creating a new peer to peer digital contents ecosystem. We are disrupting the centralized models of content distribution dominated by extractive intermediaries" />
    <meta name="naver-site-verification" content="085e37630d5559ef4816b745a8852acf749f4254"/>

    <title>Piction Network</title>

    <link rel="shortcut icon" href="/static/favicon.png" />
    <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic|Open+Sans|Poppins" rel="stylesheet" />
  </Head>
)
