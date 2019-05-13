import React from "react"
import { Link } from "gatsby"
import Footer from "./footer"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link
      to={props.to}
      style={{
        color: props.menu == props.children.toLowerCase() ? `#007AFF` : ``,
        textDecoration:
          props.menu == props.children.toLowerCase() ? `underline` : `none`,
      }}
    >
      {props.children}
    </Link>
  </li>
)

export default ({ menu, children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>승귤의 홈</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/" menu={menu}>
          Home
        </ListLink>
        <ListLink to="/about" menu={menu}>
          About
        </ListLink>
        <ListLink to="/contact" menu={menu}>
          Contact
        </ListLink>
      </ul>
    </header>

    {children}

    <Footer />
  </div>
)
