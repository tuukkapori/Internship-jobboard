import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../misc/Button'
import { useSearchParams } from 'react-router-dom'
import building from '../pictures/building.jpeg'

const Wrapper = styled.div`
  border-radius: 20px;
  min-height: 500px;
  width: 600px;
  position: relative;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.15);
  background: white;
  @media (max-width: 500px) {
    width: 95vw;
  }
`

const CompanyLogo = styled.div`
  width: 60px;
  height: 60px;
  background: lightblue;
  text-align: center;
  font-size: 25px;
  color: white;
  position: absolute;
  top: 120px;
  left: 30px;
`

const BigJobCard = ({ jobs }) => {
  const [job, setJob] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  let id = searchParams.get('open')

  useEffect(() => {
    setJob(
      jobs.find((job) => {
        return job._id === id
      })
    )
  }, [jobs, id])

  const closeBigCard = () => {
    let params = Object.fromEntries([...searchParams])
    delete params.open
    setSearchParams(params)
  }

  if (!job) {
    return <Wrapper>loading...</Wrapper>
  }

  return (
    <Wrapper>
      <div
        style={{
          height: '150px',
          backgroundImage: `url(${building})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          padding: '20px',
        }}
      >
        <Button
          style={{
            color: 'white',
            background: 'black',
          }}
          onClick={closeBigCard}
        >
          {' '}
          Close
        </Button>
      </div>
      <CompanyLogo>{job.company[0]}</CompanyLogo>

      <div style={{ padding: '0px 30px', marginTop: '40px' }}>
        <div>
          <h2>{job.jobTitle}</h2>
        </div>
        <div style={{ marginBottom: '35px' }}>
          <h3 style={{ color: 'grey', marginBottom: '15px' }}>{job.company}</h3>
          <Button>Apply now</Button>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <h4>Join us!</h4>
          <p>{job.description}</p>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <h4>Requirements</h4>
          <p>- {job.requirements}</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default BigJobCard
