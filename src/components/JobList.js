import React from 'react'
import SmallJobCard from './SmallJobCard'
import styled from 'styled-components'

const ListItem = styled.li`
  margin: 10px;

  @media (max-width: 500px) {
    margin: 8px 0px;
    display: flex;
    justify-content: center;
  }
`

const ListWrapper = styled.div`
  justify-self: flex-start;
  min-heigth: 500px;
  min-width: 500px;
  overflow; hidden;

  @media (max-width: 500px) {
    width: 100vw;
    min-width: 200px;
  }
`

const UnorderedList = styled.ul`
  list-style: none;
  overflow: scroll;
  padding: 0px 20px;
  margin: 0px auto;

  @media (max-width: 500px) {
    padding: 0px 0px;
    margin: 0px 0px;
  }
`

const JobList = ({ jobs }) => {
  return (
    <ListWrapper>
      {jobs.length === 0 ? <p>No matches </p> : null}
      <UnorderedList>
        {jobs &&
          jobs.map((job) => {
            return (
              <ListItem key={job._id}>{<SmallJobCard job={job} />}</ListItem>
            )
          })}
      </UnorderedList>
    </ListWrapper>
  )
}

export default JobList
