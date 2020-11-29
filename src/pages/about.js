import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>Im Sina</h1>
      <h3>
        I'm just learnign Gatsby.js and im about to become a great frontend
        developer whos gonna make some cash for life
      </h3>
      <p>
        If you want to contact me click this <Link to="/contact">link</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
