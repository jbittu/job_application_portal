import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ApplicationSummary = () => {
 const {id} = useParams();
 const navigate = useNavigate();
 const applications = useSelector((state) => state.applications.applications);
 const application = applications.find((app) => Number(app.jobId) === Number(id)) || {};
 if (!application) {
  return <p>Loading application details...</p>;
}

  return (
    <div className="summary">
        <h2>Application Summary</h2>
        <p><strong>Name:</strong>{application.name}</p>
        <p><strong>Email:</strong>{application.email}</p>
        <p><strong>Phone no.:</strong>{application.phone}</p>
        <p><strong>Exprience:</strong>{application.experience}</p>
        <p><strong>Skills:</strong>{application.skills}</p>
        <p><strong>Starting Date:</strong>{application.startdate}</p>

        <button onClick={()=> navigate(`/form/${application.id}`)}>Edite Application</button>
        <button onClick={()=>navigate(`/applications`)}>Conform</button>
    </div>
  )
}

export default ApplicationSummary