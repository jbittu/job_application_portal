import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"


const ApplicationList = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const applications = useSelector((state)=> state.applications.applications);
  const jobs = useSelector((state)=>state.jobs.jobs);
  // const application = applications.find((app) => app.id === Number(id));
  return (
    <div className="application list">
      <h2>Submited Applications</h2>
      {applications.length == 0 ? ( <h3>No Application Submted</h3>)
        : (
            <ul>
              {applications.map((app)=>{
                const job = jobs.find((job) => job.id === app.jobId);

                <li key={app.id} className="applaction-card">
                  <h3>{job ? `${job.title} - ${job.company}` : "Job not found"}</h3>
                  <p><strong>Applicant :</strong>{app.name}</p>
                  <p><strong>Start Date : </strong>{app.startdate}</p>
                  <button onClick={() => navigate(`/applications/${app.id}`)}>View Details</button>
                </li>
              })}
            </ul>
        )
      }
      
    </div>
  )
}

export default ApplicationList