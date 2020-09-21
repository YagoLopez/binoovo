import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="prefetch"
            href="/font/roboto-v20-latin-regular.woff2"
            as="font"
            crossOrigin="*"
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
