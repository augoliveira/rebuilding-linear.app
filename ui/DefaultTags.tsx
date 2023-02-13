import Script from "next/script"

// Default <head> tags we want shared across the app
const APP_NAME = 'Agência full service'
const APP_DESCRIPTION =
  'up.expert | Agência especializada em Marketing Digital.'
export function DefaultTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="all" />
      <meta name="rating" content="general" />
      <meta name="googlebot" content="all" />
      <meta name="expires" content="never" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="description" content={APP_DESCRIPTION} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />
      <meta
        name="twitter:summary"
        content="up.expert | Marketing Digital em Brasília | (61) 3355-6348"
      />
      <meta name="twitter:site" content="https://www.upexpert.com.br" />
      <meta name="twitter:creator" content="up.expert" />
      <meta
        property="og:title"
        content="up.expert | Marketing Digital em Brasília | (61) 3355-6348"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.upexpert.com.br/" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image" content="/public/img/ogimage.png" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />

      <meta
        property="og:description"
        content="Agência de Marketing Digital em Brasília-DF e Goiânia, honesta e eficiente. Confie em quem mais entende de resultados no digital, fale com a up.expert."
      />
      <meta property="og:determiner" content="A" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="up.expert" />
      <link rel="canonical" href="https://www.upexpert.com.br/" />
      <meta name="author" content="up.expert" />
      {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
      {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}
      <link
        href="/favicon/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicon/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/favicon/site.webmanifest" rel="manifest" />
      <link
        color="#000000"
        href="/favicon/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <link href="/favicon/favicon.ico" rel="shortcut icon" />
    </>
  )
}
