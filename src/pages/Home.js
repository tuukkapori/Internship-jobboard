import React from 'react'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'
import Button from '../misc/Button'

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
        <h2
          style={{
            fontSize: '70px',
            width: '700px',
            textAlign: 'center',
            color: 'white',
            boxShadow: '1px rgba(0,0,0,0.5)',
          }}
        >
          The number one platform for finding internship roles!
        </h2>
        <Link to="/jobs" style={{ alignSelf: 'center' }}>
          <Button
            style={{
              alignSelf: 'center',
              fontSize: '20px',
              padding: '25px',
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
