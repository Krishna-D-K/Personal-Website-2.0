import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export const SEO = ({ title, description, pathname, image, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${image}` || null,
    url: `${siteUrl}/${pathname || ``}`,
    // twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:image" content={seo.image} />
      <meta name="og:url" content={seo.url} />
      <meta name="og:description" content={seo.description} />
      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      {/* <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" /> */}
      {children}
    </>
  )
}