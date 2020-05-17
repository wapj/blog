import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const html = post.html
  const { next, prev } = pageContext

  return (
    <Layout menu="blog" title={post.frontmatter.title}>
      <div style={{ clear: "both" }}>
        <h1>{title}</h1>
        <p>
          <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
        </p>
        <p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </p>

        <div style={{ marginBottom: "1rem", fontFamily: "avenir" }}>
          {next && (
            <Link to={next.fields.slug}>
              Next: {`${next.frontmatter.title}`}
            </Link>
          )}
        </div>
        <div style={{ fontFamily: "avenir" }}>
          {prev && (
            <Link to={prev.fields.slug}>
              Prev: {`${prev.frontmatter.title}`}
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      timeToRead
      frontmatter {
        title
        tags
        category
      }
    }
  }
`
