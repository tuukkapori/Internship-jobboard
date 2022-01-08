import React from 'react'
import SmallJobCard from './SmallJobCard'

const JobList = ({ jobs }) => {
  return (
    <div
      style={{
        justifySelf: 'flex-start',
        minHeight: '500px',
        minWidth: '500px',
      }}
    >
      {jobs.length === 0 ? <p>No matches </p> : null}
      <ul
        style={{
          listStyle: 'none',
          overflow: 'scroll',
          padding: '0px 20px',
          margin: '0px auto',
        }}
      >
        {jobs &&
          jobs.map((job) => {
            return (
              <li key={job._id} style={{ margin: '10px' }}>
                {<SmallJobCard job={job} />}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default JobList
