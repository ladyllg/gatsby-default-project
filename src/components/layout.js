import * as React from 'react'
import Navbar from './navbar'

const Layout = ({ pageTitle, children }) => {

  return (
    <>      
      <div>
        <Navbar/>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout