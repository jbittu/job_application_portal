import React from 'react'
import { useNavigate } from 'react-router-dom'

const JobDetails = ({job}) => {
  const navigate = useNavigate();
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <h3>{job.company}</h3>
      <p>{job.discription}</p>
      <button onClick={() => navigate(`jobs/${job.id}`)}>View Details</button>
      <button onClick={() => navigate(`/form/${job.id}`)}>Apply</button>
    </div>
  )
}

export default JobDetails;