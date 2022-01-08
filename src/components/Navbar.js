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
`

const Navbar = () => {
  return (
    <Nav>
      <Link
        to="/"
        style={{ color: 'black', textDecoration: 'none', textShadow: 'black' }}
      >
        <h1>Internships</h1>
      </Link>
      <Link to="/newjob">
        <Button>Create a new job post</Button>
      </Link>
    </Nav>
  )
}

export default Navbar
