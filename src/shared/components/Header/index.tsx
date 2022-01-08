import Link from 'next/link'
import React from 'react'
import { HeaderWrapper } from './styles'

const Header = () => {
  return(
    <HeaderWrapper>
      <Link href="/" >Pokemon</Link>
      <Link href="/pokemon/owned" >Owned</Link>
    </HeaderWrapper>
  )
}

export default Header
