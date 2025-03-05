import React from 'react'
import Navbar from '../components/Navbar'
import JobCard from '../components/JobCard'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


const Home = () => {
  const jobs = useSelector(state => state.jobs.jobs);

  // useEffect(() => {
  //   console.log("Jobs from Redux:", jobs); 
  // }, [jobs]);

  return (
    <div className="home-container">
      <Navbar/>
      <h2>Avilable Jobs</h2>
      <div className="job-list">
        {jobs.length>0 ?
        jobs.map((job)=><JobCard key={job.id} job={job}/>)
         : (<h2>No Jobs Available</h2>)
         }
      </div>

    </div>
  )
}

export default Home