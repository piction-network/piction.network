import Head from "next/head";

export default ({locale}) => (
  <Head>
    <meta charSet="utf-8" />
    <title>Piction network</title>
    <meta name="description" content={locale.hero} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="og:title" content="Piction network" />
    <meta name="og:description" content={locale.hero} />
    <meta name="og:image" content="/static/og.png" />

    <link rel="shortcut icon" href="/static/favicon.png" />
    <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic|Open+Sans|Poppins" rel="stylesheet" />
  </Head>
)
