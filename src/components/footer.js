import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import footerStyles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p>Created by Sina Salahshour, &copy; 2020</p>
    </footer>
  )
}

export default Footer
