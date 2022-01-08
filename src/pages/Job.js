import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../misc/Button'
import { useSearchParams, useParams, Link } from 'react-router-dom'
import building from '../pictures/building.jpeg'
import axios from 'axios'
import { baseURL } from '../baseURL'

const Wrapper = styled.div`
  border-radius: 20px;
  min-height: 500px;
  width: 600px;
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
  position: relative;
  top: -30px;
  left: 30px;
`

const ImageWrapper = styled.div`
  height: 100px;
  background-image: url(${building});
  background-position: center;
  background-size: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`

const JobTitle = styled.h2`
  font-size: 19px;
`

const CompanyTitle = styled.h3`
  font-size: 14px;
  color: grey;
`

const SubHeading = styled.h4`
  font-size: 1rem;
`

const Paragraph = styled.p`
  font-size: 0.8rem;
`

const Job = () => {
  const [job, setJob] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const { jobID } = useParams()
  console.log('jobID: ', jobID)

  const getJob = async (id) => {
    let url = `${baseURL}/${id}`
    console.log(url)

    const result = await axios.get(url)
    console.log(result.data.job[0])

    setJob(result.data.job[0])
  }

  useEffect(() => {
    getJob(jobID)
  }, [])

  if (!job) {
    return <Wrapper></Wrapper>
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '25px',
      }}
    >
      <Wrapper>
        <ImageWrapper></ImageWrapper>
        <CompanyLogo>{job.company[0]}</CompanyLogo>

        <div style={{ padding: '0px 30px' }}>
          <div>
            <JobTitle>{job.jobTitle}</JobTitle>
          </div>
          <div style={{ marginBottom: '35px' }}>
            <CompanyTitle style={{ color: 'grey', marginBottom: '15px' }}>
              {job.company}
            </CompanyTitle>
            <Button>Apply now</Button>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <SubHeading>Join us!</SubHeading>
            <Paragraph>{job.description}</Paragraph>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <SubHeading>Requirements</SubHeading>
            <Paragraph>- {job.requirements}</Paragraph>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Job
