import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="//fonts.googleapis.com/css?family=Roboto:300,400,500"
            rel="preload" as="style" type="font/woff2" media="all"/>
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