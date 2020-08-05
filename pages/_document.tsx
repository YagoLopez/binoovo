import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/material-components-web.min.css" rel="stylesheet"/>
          <link href="/responsive.css" rel="stylesheet" />
          <link href="//fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet"/>
          <link href="//fonts.googleapis.com/icon?family=Material+Icons&display=swap" rel="stylesheet" />
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