import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import BigJobCard from '../components/BigJobCard'
import JobList from '../components/JobList'
import SearchBar from '../components/SearchBar'
import axios from 'axios'
import CreateNewJob from '../components/CreateNewJob'
import { baseURL } from '../baseURL'

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
    <div>
      <SearchBar />
      <div></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <h3 style={{ textAlign: 'center' }}>
            {searchParams.get('search')
              ? `Showing results: ${searchParams.get('search')} (${jobs.length}
          ${jobs.length === 1 ? 'match' : 'matches'})`
              : 'Showing all jobs'}
          </h3>
          <JobList jobs={formattedJobs()} />
        </div>
        <div
          style={{
            position: 'sticky',
            top: '40px',
            alignSelf: 'flex-start',
          }}
        >
          {openBigCard ? <BigJobCard jobs={jobs} /> : <CreateNewJob />}
        </div>
      </div>
    </div>
  )
}

export default Jobs
