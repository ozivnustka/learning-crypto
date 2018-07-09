import React from 'react'
import { Link } from 'react-router-dom'
import { StyledUl, StyledLi } from '../../componentsStyled/Menu'

const Header = () => (
  <header>
    <nav>
      <StyledUl>
        <StyledLi><Link to='/'>Home</Link></StyledLi>
        <StyledLi><Link to='/specification'>Specification</Link></StyledLi>
        <StyledLi><Link to='/exercises'>Exercises</Link></StyledLi>
        <StyledLi><Link to='/blockchain'>Blockchain</Link></StyledLi>
        <StyledLi><Link to='/transactions'>Transactions</Link></StyledLi>
        <StyledLi><Link to='/balance'>Balance</Link></StyledLi>
        <StyledLi><Link to='/upload-block'>Upload block</Link></StyledLi>
      </StyledUl>
    </nav>
  </header>
)

export default Header
