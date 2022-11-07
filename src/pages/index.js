import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/layout.module.css"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    
    <section className={styles.sectionOne}>
      <div className={styles.portraitContainer}>
        <StaticImage className={styles.portrait} src="../images/portrait.jpg" alt="A bird" layout="fixed" width={500} height={600}/>
      </div>
      <div className={styles.textContainer}>
        <span style={{fontWeight: 700, fontSize: "50px", lineHeight: "4rem"}}
        >
          My name is <span className={styles.textHighlight}>Laura Lima</span> & I build things on the Internet.
        </span>

        <p style={{fontSize: "25px", lineHeight: "2rem"}}>
          I’m a fullstack web developer based in Brazil, but also a cinema enthusiast and music lover.
        </p>
      </div>
      
    </section>

    <section className={styles.sectionTwo}>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </section>
       
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
