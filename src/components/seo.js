import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default ({ path, description, image: metaImage, title }) => {
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

  const url = `https://blog.gyus.me${path}`
  const image = metaImage ? new URL(metaImage, defaults.url) : false

  return (
    <Helmet>
      <meta name="test" content="test" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content={defaults.twitter} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      {image && <meta name="twitter:image" content={image} />}
      <meta name="author" content="seungkyoo.park@gmail.com" />
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
    </Helmet>
  )
}
