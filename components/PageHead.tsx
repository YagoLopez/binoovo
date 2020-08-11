import NextHead from 'next/head'

const defaultDescription = 'Search Movies'
const defaultKeywords = 'Search Movies, GraphQL, Nextjs, React, SSR, Server-Side-Rendering, API'
const defaultOGURL = ''
const defaultOGImage = ''

interface PageHeadProps {
  title: string
  description?: string
  keywords?: string
  url?: string
  ogImage?: string
}

const PageHead = ({ title, description, keywords, url, ogImage }: PageHeadProps) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ''}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description || defaultDescription} />
    <meta name="keywords" content={keywords || defaultKeywords} />
    <meta property="og:url" content={url || defaultOGURL} />
    <meta property="og:title" content={title || ''} />
    <meta property="og:description" content={description || defaultDescription} />
    <meta name="twitter:site" content={url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage || defaultOGImage} />
    <meta property="og:image" content={ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="theme-color" content="#317EFB" />
    <link rel="manifest" href="manifest.json" />
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
    <link rel="mask-icon" href="favicon-mask.svg" color="#000000" />
  </NextHead>
)

export default PageHead
