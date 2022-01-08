import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import BigJobCard from '../components/BigJobCard'
import JobList from '../components/JobList'
import SearchBar from '../components/SearchBar'
import axios from 'axios'
import CreateNewJob from '../components/CreateNewJob'
import { baseURL } from '../baseURL'
import styled from 'styled-components'

const SearchStatus = styled.h3`
  display: block;
  padding-left: 25px;
  @media (max-width: 500px) {
    font-size: 13px;
  }
`

const Jobs = () => {
  const [jobs, setJobs] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()

  let openBigCard = searchParams.get('open')

  console.log(searchParams.get('title'))

  const formattedJobs = () => {
    if (!jobs) return []
    const titleFilter = searchParams.get('title')

    if (!titleFilter) return jobs

    return jobs.filter((job) => {
      return (
        job.jobTitle.toLowerCase().includes(titleFilter.toLowerCase()) ||
        job.company.toLowerCase().includes(titleFilter.toLowerCase())
      )
    })
  }

  useEffect(() => {
    openBigCard = searchParams.get('open')
  }, [searchParams])

  useEffect(() => {
    const getData = async () => {
      console.log('search aprams', searchParams.get('search'))
      let url = baseURL
      if (searchParams.get('search')) {
        url = url + `?search=${searchParams.get('search')}`
      }
      console.log('url: ', url)
      const response = await axios.get(url)

      setJobs(response.data.jobs)
      console.log('jobs', jobs)
    }
    getData()
  }, [searchParams.get('search')])

  return (
    <div style={{ width: '100vw', minHeight: '100vh' }}>
      <SearchBar />
      <div></div>
      <MainView>
        <div>
          <SearchStatus>
            {searchParams.get('search')
              ? `Showing results: ${searchParams.get('search')}`
              : 'Showing all jobs'}
          </SearchStatus>
          <JobList jobs={formattedJobs()} />
        </div>
        <PopupView>
          {openBigCard ? <BigJobCard jobs={jobs} /> : <CreateNewJob />}
        </PopupView>
      </MainView>
    </div>
  )
}

export default Jobs

const MainView = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    max-width: 100vw;
  }
`

const PopupView = styled.div`
  position: sticky;
  top: 40px;
  align-self: flex-start;
  @media (max-width: 500px) {
    display: none;
  }
`
