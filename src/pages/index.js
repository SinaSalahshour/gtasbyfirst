import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello People</h1>
      <h2>I'm Sina a frontend developer living in ugly Mashhad</h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </div>
  )
}

export default IndexPage
