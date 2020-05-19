import React from "react"

import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Comment from "../components/comment"

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const html = post.html
  const { next, prev } = pageContext

  return (
    <Layout menu="blog" title={post.frontmatter.title}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div style={{ clear: "both" }}>
        <h1>{title}</h1>

        <h3>목차</h3>

        <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />

        <div dangerouslySetInnerHTML={{ __html: html }} />

        <hr></hr>
        <div style={{ marginBottom: "1rem", fontFamily: "avenir" }}>
          {next && (
            <Link to={next.fields.slug}>
              다음글: {`${next.frontmatter.title}`}
            </Link>
          )}
        </div>
        <div style={{ fontFamily: "avenir" }}>
          {prev && (
            <Link to={prev.fields.slug}>
              이전글: {`${prev.frontmatter.title}`}
            </Link>
          )}
        </div>
      </div>
      <div>
        <Comment></Comment>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      tableOfContents
      timeToRead
      frontmatter {
        title
        tags
        category
        image: featured {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`
