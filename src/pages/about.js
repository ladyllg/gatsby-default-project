// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"


export const Head = () => <title>About Me</title>

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I'm always happy.</p>
      <StaticImage
        src="/home/ladylaura/my-default-starter/src/images/photos-dog-noses.png"
        loading="eager"
        placeholder="blurred"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A doggy"        
      />
    </Layout>
  )
}

export default AboutPage