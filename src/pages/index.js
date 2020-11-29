import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
     <h1>Hello People</h1>
      <h2>I'm Sina a frontend developer living in ugly Mashhad</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>      
    </Layout>
  )
  
  return (
    <div>
      <h1>Hello People</h1>
      <h2>I'm Sina a frontend developer living in ugly Mashhad</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </div>
  )
}

export default IndexPage
