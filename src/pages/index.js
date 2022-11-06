import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    <div className={styles.textCenter}>
      <StaticImage
        src="https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
        loading="eager"
        placeholder="blurred"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A doggy"        
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
    </div>    
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
