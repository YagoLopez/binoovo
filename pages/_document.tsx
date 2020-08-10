import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head/>
        <body style={{margin: 0}} className="mdc-typography">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument