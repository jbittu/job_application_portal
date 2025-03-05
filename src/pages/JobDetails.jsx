import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/JobDetails.css";


const JobDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const jobs = useSelector((state) => state.jobs.jobs);

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return <>
    <h2>Job not found!</h2>
    <button onClick={() => navigate(`/`)}>Go Back</button>
    </>
    
  }

  return (
    <div className="job-details">

      
      <h1>{job.title}</h1>
      <h2>{job.company}</h2>
      <p>{job.description}</p>
      <button onClick={() => navigate(`/form`)}>Apply</button>
      <button onClick={() => navigate(`/`)}>Go Back</button>
    </div>
  );
};

export default JobDetails;
