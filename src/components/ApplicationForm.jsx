import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addApplication, updateApplication } from "../redux/applicationSlice";
import validateForm from "./FormValidation";

const ApplicationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const applications = useSelector((state) => state.applications.applications);
  const existingApplication = applications.find(
    (application) => Numner(application.jobId) === Number(id) 
  );
  

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [skills, setSkills] = useState("");

  const [formData, setFormData] = useState({
    id: Date.now(),
    name: existingApplication?.name || "",
    email: existingApplication?.email || "",
    phone: existingApplication?.phone || "",
    experience: existingApplication?.experience || "",
    skills: existingApplication?.skills || [],
    startdate: existingApplication?.startdate || "",
  });

  useEffect(() => {
    if (existingApplication) {
      setFormData({
        id: existingApplication.id,
        name: existingApplication.name || "",
        email: existingApplication.email || "",
        phone: existingApplication.phone || "",
        experience: existingApplication.experience || "",
        skills: existingApplication.skills || [],
        startdate: existingApplication.startdate || "",
      });
    }
  }, [existingApplication]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    const newErrors = validateForm(formData, step);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const addSkill = () => {
    if (skills.trim()) {
      setFormData({ ...formData, skills: [...formData.skills, skills.trim()] });
      setSkills("");
    }
  };

  const removeSkill = (index) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData, step);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (existingApplication) {
        dispatch(updateApplication({ id: existingApplication.id, ...formData }));
      } else {
        dispatch(addApplication({ jobId: Number(id), ...formData }));
      }
      navigate(`/applications/${id}`);
    }
  };

  return (
    <div className="form-container">
      <h2>{existingApplication ? "Edit Application" : "New Application"}</h2>

      {step === 1 && (
        <div>
          <h3>Step 1: Personal Information</h3>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p>{errors.name}</p>}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p>{errors.email}</p>}
          <input
            type="tel"
            placeholder="Phone no."
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p>{errors.phone}</p>}
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>Step 2: Experience and Skills</h3>
          <input
            type="number"
            placeholder="Years of Experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
          {errors.experience && <p>{errors.experience}</p>}
          <div>
            <input
              type="text"
              placeholder="Add Skills"
              name="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
            <br />
            <button type="button" onClick={addSkill}>ADD</button>
          </div>
          <ul>
            {formData.skills.map((skill, index) => (
              <li key={index}>
                {skill}
                <button type="button" onClick={() => removeSkill(index)}>X</button>
              </li>
            ))}
          </ul>
          {errors.skills && <p>{errors.skills}</p>}
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>Step 3: Additional Information</h3>
          <input
            type="date"
            placeholder="Start Date"
            name="startdate"
            value={formData.startdate}
            onChange={handleChange}
            required
          />
          {errors.startdate && <p>{errors.startdate}</p>}
          <button onClick={handleBack}>Back</button>
          <button onClick={handleSubmit}>{existingApplication ? "Update" : "Submit"}</button>
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;
