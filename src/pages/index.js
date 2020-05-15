import React, { useState } from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  const blogTitles = [`Fake it till you make it`, "Focus on just one thing"]
  const [state, _] = useState(() => {
    const initial = parseInt(Math.random() * blogTitles.length)
    return initial
  })

  return (
    <Layout menu="home">
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          {blogTitles[state]}
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
              tags : {node.frontmatter.tags}
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
