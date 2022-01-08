import React, { useState } from 'react'
import styled from 'styled-components'
import { createSearchParams, useNavigate } from 'react-router-dom'

const Searchbar = styled.div`
  border-radius: 20px;
  background: white;
  width: 50vw;
  height: 70px;
  margin: 50px auto;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
`

const SearchbarInput = styled.input`
  border: none;

  width: 100%;
  height: 50px;
  font-size: 22px;
  padding: 0px 10px;
  &:focus {
    outline: none;
  }
`

const SearchbarButton = styled.button`
  heigth: 70px;
  background: green;
  border: none;
  color: white;
  font-size: 22px;
  padding: 0 30px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    filter: brightness(1.5);
  }
`

const SearchBar = ({ style }) => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    let params = {}
    if (search !== '') {
      params = { search }
    }
    navigate({
      pathname: '/jobs',
      search: `?${createSearchParams(params)}`,
    })
  }

  return (
    <Searchbar style={style}>
      <div style={{ display: 'flex', alignItems: 'center', width: '50%' }}>
        <SearchbarInput
          placeholder="Search jobs and companies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleSearch()
            }
          }}
        />
      </div>

      <SearchbarButton onClick={handleSearch}>Search</SearchbarButton>
    </Searchbar>
  )
}

export default SearchBar
