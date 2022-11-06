import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from "../components/layout.module.css"

const links = [
  {
    text: "Home",
    url: "/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "About",
    url: "/about",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Blog",
    url: "/blog",
    description:
      "My cool posts.",
  },
]

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <header className={styles.siteTitle}>{data.site.siteMetadata.title}</header>
      <ul className={styles.navLinks}>
      {links.map(link => (
        <li key={link.url} className={styles.navLinkItem}>
          <Link to={`${link.url}`} className={styles.navLinkText}>{link.text} ↗</Link>        
        </li>
      ))}
    </ul>

    <main>
      <h1 className={styles.heading}>{pageTitle}</h1>        
    </main>

    {children}
    
    </div>
  )
}

export default Layout