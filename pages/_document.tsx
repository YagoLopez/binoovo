import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="/material-components-web.min.css" rel="stylesheet" />
          <link href="/responsive.css" rel="stylesheet" />
          <link href="//fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
          <link href="//fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
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