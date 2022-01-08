import React from 'react'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'
import Button from '../misc/Button'
import styled from 'styled-components'

const HeroText = styled.h2`
  font-size: 70px;
  width: 700px;
  text-align: center;
  color: white;
  @media (max-width: 768px) {
    font-size: 50px;
    width: auto;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
`

const Home = () => {
  return (
    <div>
      <div
        style={{
          height: '700px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background:
            'linear-gradient(165deg, rgba(6,0,113,1) 0%, rgba(0,149,255,1) 100%)',
        }}
      >
        <SearchBar />
        <HeroText>
          The number one platform for finding internship roles!
        </HeroText>
        <Link to="/jobs" style={{ alignSelf: 'center' }}>
          <Button
            style={{
              alignSelf: 'center',
              fontSize: '18px',
              padding: '22px',
              backgroundColor: 'green',
              marginTop: '30px',
            }}
          >
            Show all positions
          </Button>
        </Link>
      </div>
      <div
        style={{
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h3>It's awesome!!</h3>
      </div>
    </div>
  )
}

export default Home
