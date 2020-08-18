import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Binoovo Movies Search</title>
          <link href="//fonts.googleapis.com/css?family=Roboto:300,400,500"
            rel="prefetch" as="style" media="all" crossOrigin="anonymous"/>
          <link href="//fonts.googleapis.com/icon?family=Material+Icons&display=swap"
            rel="stylesheet" media="all" />
        </Head>
        <body style={{margin: 0}} className="mdc-typography">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument