import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-center">
      <a href="/">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <ul className="nav-links">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/about">about</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
