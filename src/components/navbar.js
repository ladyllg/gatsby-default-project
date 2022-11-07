import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/navbar.module.css'
import { DiCodepen } from 'react-icons/di';
import { IconContext } from "react-icons";


const Navbar = () => {

  return (
    <>
      <nav>
				<div className={styles.siteTitle}>
				<div className={styles.logoContainer}>
					<IconContext.Provider value={{ size:"4rem" }}>
						<div>
							<DiCodepen />
						</div>
					</IconContext.Provider>
				</div>

					<div className={styles.titleContainer}>
						<h1>Laura Lima</h1>
						<h3>portfolio</h3>
					</div>
					
					
				</div>
				<div className={styles.links}>
					<div className={styles.linksContainer}>
						<Link to="/about">about</Link>
						<Link to="/projects">projects</Link>
						<Link to="/contact">contact</Link>
					</div>
					
				</div>
			</nav>
    </>
  )
}

export default Navbar