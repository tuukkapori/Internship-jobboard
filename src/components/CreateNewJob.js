import React from 'react'
import Button from '../misc/Button'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = styled.div`
  width: 200px;
  padding: 20px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.05);
`

const CreateNewJob = () => {
  return (
    <Card>
      <h3>Post a new internship position for free!</h3>
      <Link to="/newjob">
        {' '}
        <Button>Get started</Button>
      </Link>
    </Card>
  )
}

export default CreateNewJob
