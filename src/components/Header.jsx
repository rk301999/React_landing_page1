import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink,NavHashLink} from 'react-router-hash-link'

const Header = () => {
  return (
    <nav>
      <h1>TechStar</h1>
      <main>
        <HashLink smooth to="/#home">Home</HashLink>
        <Link to="/contact">Contacts</Link>
        <HashLink smooth to="/#about">About</HashLink>
        <HashLink smooth to="/#brands">Brands</HashLink>
        <Link to="/services">Services</Link>
      </main>
    </nav>
  )}

export default Header
