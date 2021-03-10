import React from 'react'

import TopBar from './TopBar/TopBar';
import Wrapper from './Wrapper/Wrapper';
function Header() {

    return (
        <header className="header">
          <TopBar></TopBar>
          <Wrapper></Wrapper>
        </header>
    )
}

export default Header
