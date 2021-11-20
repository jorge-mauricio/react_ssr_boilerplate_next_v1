import  Document, { Head, Main, NextScript } from 'next/document';

export default class DocumentLayoutFrontendMain extends Document {
  render () {
    return (
      <html lang="en">
        <Head>
          <meta charSet="uft=8" />
          
          {/*<link rel="stylesheet" href="../../app_styles/styles-frontend.css" />*/}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
          {/*<link href='nprogress.css' />*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>        
      </html>
    );
  }
}
