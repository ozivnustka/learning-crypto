import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/definition'>Definition</Link></li>
        <li><Link to='/blockchain'>Blockchain</Link></li>
        <li><Link to='/upload-block'>Upload block</Link></li>
        <li><Link to='/transactions'>Transactions</Link></li>
        <li><Link to='/balance'>Balance</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
