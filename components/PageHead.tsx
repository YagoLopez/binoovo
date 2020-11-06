import NextHead from 'next/head'
import { CONST } from '../constants'

interface PageHeadProps {
  title: string
  description?: string
  keywords?: string
  url?: string
  ogImage?: string
}

const PageHead = ({
  title,
  description,
  keywords,
  url,
  ogImage,
}: PageHeadProps) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ''}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content={description || CONST.PAGE_HEAD_DEFAULT_DESCRIPTION}
    />
    <meta
      name="keywords"
      content={keywords || CONST.PAGE_HEAD_DEFAULT_KEYWORDS}
    />
    <meta property="og:url" content={url || CONST.PAGE_HEAD_OG_URL} />
    <meta property="og:title" content={title || ''} />
    <meta
      property="og:description"
      content={description || CONST.PAGE_HEAD_DEFAULT_DESCRIPTION}
    />
    <meta name="twitter:site" content={url || CONST.PAGE_HEAD_OG_URL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage || CONST.PAGE_HEAD_OG_IMAGE} />
    <meta property="og:image" content={ogImage || CONST.PAGE_HEAD_OG_IMAGE} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="theme-color" content="#317EFB" />
    <link rel="preconnect" href="https://tmdb-graphql.com/" />
    <link rel="dns-prefetch" href="https://tmdb-graphql.com/" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" type="image/svg+xml" href="favicon.svg" />
    <link rel="apple-touch-icon" sizes="180x180" href="favicon.svg" />
    <link rel="mask-icon" href="favicon.svg" color="#000000" />
  </NextHead>
)

export default PageHead
