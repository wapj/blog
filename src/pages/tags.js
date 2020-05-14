import React from "react"
import kebabCase from "lodash/kebabCase"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout menu="tags">
    <div>
      <h1>태그들</h1>
      <ul>
        {data.allMarkdownRemark.group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
