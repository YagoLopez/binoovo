import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="//fonts.googleapis.com/css?family=Roboto:300,400,500"
            rel="prefetch"
            as="style"
            media="all"
            crossOrigin="anonymous"
          />
          <link
            href="//fonts.googleapis.com/icon?family=Material+Icons&display=swap"
            rel="stylesheet"
            media="all"
          />
        </Head>
        <body
          className="mdc-typography"
          style={{ margin: 0, background: '#f6f6f6', height: '88vh' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
