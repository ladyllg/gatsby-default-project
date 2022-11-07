import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const menuLinks = [
  {
    text: "about",
    url: "/",
    description:
      "A description",
  },
  {
    text: "projects",
    url: "/",
    description:
      "A collection of projects",
  },
  {
    text: "contact",
    url: "/",
    description:
      "Get in touch ",
  },
]

const Header = ({ siteTitle }) => (

  <div>
        <nav>
          <ul style={{ display: "flex", flex: 1 }}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: `none`,
                  padding: `1rem`,
                }}
              >
                <Link style={{ color: `white` }} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
