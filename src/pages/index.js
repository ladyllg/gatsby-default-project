import * as React from "react"

import Layout from "../components/layout"
import ProjectContainerLeft from "../components/project-container-left"
import Seo from "../components/seo"
import * as styles from "../styles/layout.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { BsLinkedin,BsInstagram,BsGithub } from 'react-icons/bs';
import { IconContext } from "react-icons";

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    
    <section className={styles.sectionOne}>
      <div className={styles.portraitContainer}>
        <StaticImage src="../images/desk_illustration.png" alt="A bird" />
      </div>
      <div className={styles.textContainer}>
        <span style={{fontWeight: 700, fontSize: "50px", lineHeight: "4rem"}}
        >
          My name is <span classame={styles.textHighlight}>Laura Lima</span> & I build things on the Internet.
        </span>

        <p style={{fontSize: "25px", lineHeight: "2rem"}}>
          I’m a fullstack web developer based in Brazil, but also a cinema enthusiast and music lover.
        </p>
      </div>
      
    </section>

    <section className={styles.sectionTwo}>
      <div className={styles.textContainer}>
        <span style={{fontWeight: 700, fontSize: "50px", fontStyle: "normal"}} className={styles.textHighlight}>About Me</span>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."      
        </p>
        <div className={styles.socialsContainer}>
          <div className={styles.wrap}>
            <IconContext.Provider value={{ size:"2rem" }}>
                <BsLinkedin/>&nbsp;&nbsp;&nbsp;
                <BsInstagram/>&nbsp;&nbsp;&nbsp;
                <BsGithub/>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className={styles.portraitContainer}>
        <StaticImage className={styles.portrait} style={{borderRadius: "50%"}} src="../images/portrait.jpg" alt="A bird" width={400} height={400}></StaticImage>
      </div>
      </section>

      <section className={styles.projectsSection}>
          <div className={styles.wrap}>
            <div style={{display: "flex", justifyContent: "center", padding: "50px"}}>
              <span style={{fontWeight: 700, fontSize: "50px", fontStyle: "normal"}} className={styles.textHighlight}>Some Things I’ve Built</span>
            </div>
            <ProjectContainerLeft numberProject="1"/>            
          </div>        
      </section>
       
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
