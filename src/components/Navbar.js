import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../misc/Button'

const Nav = styled.nav`
  height: 75px;
  display: flex;
  padding: 0px 200px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.15);
  background: white;
  @media (max-width: 768px) {
    padding: 5px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
`

const NavbarTitle = styled.h2`
  font-size: 30px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Link
        to="/"
        style={{ color: 'black', textDecoration: 'none', textShadow: 'black' }}
      >
        <NavbarTitle>Internships</NavbarTitle>
      </Link>
      <Link to="/newjob">
        <Button>Post a job</Button>
      </Link>
    </Nav>
  )
}

export default Navbar
