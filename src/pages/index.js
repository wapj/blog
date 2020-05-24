import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import title from "../components/title"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout menu="home">
      <SEO title="승귤의 개발이야기" />
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          {title}
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}
              </h3>
              <span
                css={css`
                  color: #bbb;
                `}
              >
                {node.frontmatter.date}
              </span>
              <br />
              tags :{" "}
              {node.frontmatter.tags &&
                node.frontmatter.tags.map((value, _) => {
                  return `${value} `
                })}
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt

          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            tags
            category
          }
        }
      }
    }
  }
`
