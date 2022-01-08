import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import PostAJob from './pages/PostAJob'
import Footer from './components/Footer'
import Job from './pages/Job'

const ScrollToTop = (props) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return props.children
}

const App = () => {
  return (
    <div style={{ background: '#F0F3F4', minHeight: '100vh' }}>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:jobID" element={<Job />} />
          <Route path="/newjob" element={<PostAJob />} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>

        <Footer></Footer>
      </ScrollToTop>
    </div>
  )
}

export default App
