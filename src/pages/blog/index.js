import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql, Link } from 'gatsby'
import * as styles from "../../components/blog.module.css"

const BlogPage = ({ data }) => {

  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
      {
        data.allMdx.nodes.map((node) => (
          <li className={styles.navLinkItem}>
            <Link className={styles.navLinkText} to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      excerpt
      frontmatter {
        slug
        date(formatString: "YYYY, D MMMM")
        title
      }
    }
  }
}

`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage