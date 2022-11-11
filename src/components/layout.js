import * as React from 'react'
import Navbar from './navbar'
import * as  styles from '../styles/layout.module.css'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { IconContext } from "react-icons";

const Layout = ({ pageTitle, children }) => {

  return (
    <>      
      <div>
        <Navbar/>
        <main>{children}</main>
        <footer>
          <div className={styles.footerWrap}>
            <div className={styles.footerContainer}>
              <div>
                <p>{new Date().getFullYear()}, Built with Gatsby.</p>
                <p>Designed & developed by Laura Lima.</p>
              </div>
              <div>
              <IconContext.Provider value={{ size:"2rem" }}>
                <AiOutlineInstagram/>&nbsp;&nbsp;&nbsp;
                <AiOutlineGithub/>&nbsp;&nbsp;&nbsp;
                <AiOutlineLinkedin/>                
              </IconContext.Provider>
              </div>
            </div>
          </div>        
        </footer>
      </div>
    </>
  )
}

export default Layout