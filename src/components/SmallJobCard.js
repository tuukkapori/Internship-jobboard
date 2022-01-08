import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../misc/Button'
import { useLocation } from 'react-router-dom'

const Wrapper = styled.div`
  padding: 20px;
  width: 500px;
  border-radius: 25px;
  background: white;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.05);
  transition: 300ms;
  @media (max-width: 500px) {
    width: 90%;
  }
`

const CompanyName = styled.p`
  font-size: 20px;
  color: grey;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background: blue;
  border-radius: 15px;
  text-align: center;
  margin-right: 20px;
`

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
`

const JobTitle = styled.h2`
  @media (max-width: 500px) {
    font-size: 19px;
  }
`

const Desc = styled.p`
  @media (max-width: 500px) {
    font-size: 12px;
  }
`

const SmallJobCard = ({ job }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = () => {
    console.log(window.innerWidth)

    if (window.innerWidth > 500) {
      console.log(location.search)
      const currentParams = Object.fromEntries([...searchParams])
      setSearchParams({ ...currentParams, open: job._id })
    } else {
      navigate(`/jobs/${job._id}`)
    }
  }

  return (
    <Wrapper>
      <Row>
        <Logo></Logo>
        <div>
          <CompanyName>{job.company}</CompanyName>
          <JobTitle>{job.jobTitle}</JobTitle>
        </div>
      </Row>

      <Row>
        <Desc>{job.shortDesc}</Desc>
      </Row>

      <Row>
        <Button onClick={handleClick}>Learn more</Button>
      </Row>
    </Wrapper>
  )
}

export default SmallJobCard
