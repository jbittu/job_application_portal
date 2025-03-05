import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addApplication } from "../redux/applicationSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import validateForm from "./FormValidation";

const ApplicationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const applications = useSelector((state) => state.applications.applications);
  const exstingApplication = applications.find(
    (application) => application.jobId === Number(id)
  );
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [formdata, setFormData] = useState([
    exstingApplication || {
      id: Date.now(),
      name: "",
      email: "",
      phone: "",
      experience: "",
      sills: [],
      startdate: "",
    },
  ]);
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleNext = () => {
    const newErrors = validateForm(formdata, step);
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
      setFormData({ ...formdata, skills: [...formdata.skills, skills.trim()] });
      setSkills("");
    }
  };
    const removeSkill = (index) => {
        setFormData({...formdata, skills: formdata.skills.filter((_, i) => i !== index)});
    }

  return (
    <div className="form-container">
      <h2>{exstingApplication ? "Edite Application" : "New Application"}</h2>

      {step === 1 && (
        <div>
          <h3>Step 1: Personal Information</h3>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p>{errors.name}</p>}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p>{errors.email}</p>}
          <input
            type="tel"
            placeholder="Phone no."
            name="phone"
            value={formdata.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p>{errors.phone}</p>}
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h3>Step 2:Experience ans Skills</h3>
          <input
            type="number"
            placeholder="Years of Experience"
            name="experience"
            value={formdata.experience}
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
            <button type="button" onClick={addSkill}>
              ADD
            </button>
          </div>
          <ul>
            {formdata.skills.map((skill, index) => (
              <li key={index}>
                {skill}
                <button type="button" onClick={() => removeSkill(index)}>
                  X
                </button>
              </li>
            ))}
          </ul>
          {errors.skills && <p>{errors.skills}</p>}
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;
