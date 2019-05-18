import React from "react"
import { Helmet } from "react-helmet"

export default ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="https://blog.gyus.me" />
      <meta
        name="google-site-verification"
        content="DKf0uKbVabYGKz0sq8wWSyZz_1vtPx3Pey1ifAguz-E"
      />
    </Helmet>
  )
}
