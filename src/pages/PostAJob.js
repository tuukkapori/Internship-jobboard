import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../misc/Button'
import axios from 'axios'
import { baseURL } from '../baseURL'

const Input = styled.input`
  height: 30px;
  width: 400px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 0px 5px;
`

const JobDescription = styled.textarea`
  height: 250px;
  width: 400px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 0px 5px;
  resize: none;
`

const PostAJob = () => {
  const [jobTitle, setJobTitle] = useState('')
  const [company, setCompany] = useState('')
  const [requirements, setRequirements] = useState('')
  const [shortDesc, setShortDesc] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const jobObject = {
      jobTitle,
      company,
      requirements,
      shortDesc,
      description,
    }
    try {
      const postedJob = await axios.post(baseURL, jobObject)

      console.log(postedJob.data.job)
      setJobTitle('')
      setCompany('')
      setRequirements('')
      setShortDesc('')
      setDescription('')
      window.alert('success')
    } catch (error) {
      window.alert('fail')
      console.log(error)
    }
  }

  return (
    <div
      style={{
        margin: '0px auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Post a new job</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: 'white',
          padding: '20px',
          borderRadius: '20px',
          boxShadow: '0px 0px 4px 4px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div>
          <h3>Basic information</h3>
          <label>
            Job title <br />{' '}
            <Input
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />{' '}
            <br />
          </label>
          <label>
            company <br />{' '}
            <Input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />{' '}
            <br />
          </label>
          <label>
            Requirements <br />{' '}
            <Input
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            />
          </label>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
          }}
        >
          <h3>Tell little bit more about the job</h3>
          <label>
            Descripe the opportunity in one sentence <br />
            <Input
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
            />{' '}
            <br />
          </label>
          <label>
            Job description <br />{' '}
            <JobDescription
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="terms"
              checked
              value="termsChecked"
              style={{ marginRight: '10px' }}
            />
            I agree to terms and conditions
          </label>
        </div>
        <Button style={{ width: 'auto', alignSelf: 'center' }} type="submit">
          Post!
        </Button>
      </form>
    </div>
  )
}

export default PostAJob
