import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = props => {
  return (
    <>
      <Header />
      <div>
        <main>{props.children}</main>
        <footer>Footer</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
