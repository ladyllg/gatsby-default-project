import * as React from 'react'
import * as styles from '../styles/project-container.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import { FiGithub } from 'react-icons/fi';
import { TbExternalLink } from 'react-icons/tb';
import { IconContext } from "react-icons";

const ProjectContainerLeft = ({ numberProject, children }) => {

  return (
    <>      
      <div>
        <div className={styles.wrap}>

          <div>
            <StaticImage className={styles.img} width="550" src="../images/project.jpg"></StaticImage>
          </div>
          <div className={styles.overlay}>
            <span className={styles.titleProject}>Project #{numberProject}</span>
              <div className={styles.description}>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
              </div>
              <div className={styles.tags}>
                <p>
                React Styled Components Express Spotify API Heroku
                </p>
              </div>
              <div className={styles.linksProject}>
              <IconContext.Provider value={{ size:"2rem" }}>
                  <FiGithub/>&nbsp;&nbsp;&nbsp;
                  <TbExternalLink/>
              </IconContext.Provider>
              </div>
          </div>       
        </div>
      </div>
    </>
  )
}

export default ProjectContainerLeft