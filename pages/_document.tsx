import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {

  const googleScript = () => {
    
  }

  return (
    <Html lang='en'>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="icon" type="image/png" href="/images/favicon.ico" />
      </Head>
              {/*Google tag (gtag.js)*/}
      <Script id="google-tag-manager" strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-32S32NYZM7%22%3E">
      </Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-32S32NYZM7');
        `}
      </Script>  
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}