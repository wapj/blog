import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, image: metaImage, title }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          url
          twitter
        }
      }
    }
  `)

  const defaults = data.site.siteMetadata

  if (defaults.url === "" && typeof window !== "undefined") {
    defaults.url = window.location.origin
  }

  if (defaults.url === "") {
    console.error("Please set a url in your site metadata!")
    return null
  }

  const url = window.location.href
  const image = metaImage ? new URL(metaImage, defaults.url) : false

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta
        name="google-site-verification"
        content="DKf0uKbVabYGKz0sq8wWSyZz_1vtPx3Pey1ifAguz-E"
      />
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={defaults.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}

export default SEO
