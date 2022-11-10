import * as React from 'react'
import Navbar from './navbar'

const Layout = ({ pageTitle, children }) => {

  return (
    <>      
      <div>
        <Navbar/>
        <main>{children}</main>
        <footer>
          <p>{new Date().getFullYear()}, Built with Gatsby.</p>
          <p>Designed & developed by Laura Lima.</p>
        </footer>
      </div>
    </>
  )
}

export default Layout