import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ProjectContainerLeft from "../components/project-container-left"
import Seo from "../components/seo"
import * as styles from "../styles/layout.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { BsLinkedin,BsInstagram,BsGithub } from 'react-icons/bs';
import { IconContext } from "react-icons";
import ContactForm from "../components/contact-form";
import Footer from '../components/footer'

const IndexPage = ({ data }) => (
  <Layout pageTitle="Home Page">
    
    <section className={styles.sectionOne}>
      <div className={styles.portraitContainer}>
        <StaticImage src="../images/desk_illustration.png" alt="A bird" />
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
      <div className={styles.textContainer}>
        <span className={styles.textHighlight}>About Me</span>
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
              <span className={styles.textHighlight}>Some Things I’ve Built</span>
            </div>
            {
            data.allMdx.nodes.map((node) => (
              <div style={{marginBottom: "40px"}}>
                <ProjectContainerLeft numberProject={node.frontmatter.title} title={node.frontmatter.title}/>            
              </div>
              ))
            }
                       
          </div>        
      </section>
        
      <section className={styles.contactSection}>
        <div className={styles.wrap}>
          <div style={{display: "flex", justifyContent: "left"}}>
            <span className={styles.textHighlight}>Let's chat!</span>
          </div>
          <span style={{ margin: "0 15px"}}><p>Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p></span>
          <p>Feel free to email me at lauralimaufam@gmail.com or use the form below.</p>
        </div>              
        <ContactForm/>
        <div class={styles.wave}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class={styles.shapeFill}></path>
            </svg>
        </div>
      </section>
       
  </Layout>
)

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          external_link
          github_link
          slug
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="Home" />

export default IndexPage
