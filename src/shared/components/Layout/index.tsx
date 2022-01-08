import React from 'react'
import Header from '../Header'
import { LayoutWrapper } from './styles'

const Layout = ({children}) => {
  return(
    <LayoutWrapper>
      <Header/>
      {children}
    </LayoutWrapper>
  )
}

export default Layout
