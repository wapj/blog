import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Footer from "./footer"

const ListLink = props => {
  const isActiveMenu = props.menu.toLowerCase() === props.children.toLowerCase()
  return (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link
        to={props.to}
        style={{
          color: isActiveMenu ? `#007AFF` : ``,
          textDecoration: isActiveMenu ? `underline` : `none`,
        }}
      >
        {props.children}
      </Link>
    </li>
  )
}

export default ({ menu = "", children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(1)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <header
        css={css`
          margin-bottom: ${rhythm(1.5)};
        `}
      >
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3
            css={css`
              display: inline;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <ul
          css={css`
      list-style=none;
      float: right;
      `}
        >
          <ListLink to="/" menu={menu}>
            Home
          </ListLink>
          <ListLink to="/about" menu={menu}>
            About
          </ListLink>
        </ul>
      </header>

      {children}

      <Footer />
    </div>
  )
}
