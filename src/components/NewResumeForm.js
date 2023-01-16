import React, { useState } from 'react';
import axios from 'axios'
import "./NewResumeForm.css";

const NewResumeForm = (props) => {
  let defaultResume = {
    name: "",
    email: "",
    phone: "",
    resume_url: "",
    recruiter_notes: "",
    recruiter_accepted: false,
  };

  const [resume, setResume] = useState(defaultResume);

  // const handleUserChange = (event) => {
  //   props.setUser({ ...props.user, [event.target.name]: event.target.value })
  // }

  const handleResumeSubmit = (event) => {
    event.preventDefault();
    // todo: axios post request
    axios.post("localhost:8000/api/resumes")
      .then(() => {
      // show some sort of success message
        alert("You have successfully submitted your resume!")
    })
    event.target.reset();
  }

  const handleChange = (event) => {
    setResume({ ...resume, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="new-resume-form">
      {/* <h1 className="resume-form">Submit your resume!</h1> */}
      <h2 className="resume-header">Please fill out the information below and submit your resume in PDF format.</h2>
      <div className="form-container">
        <form className="submit-form">
          <label className="form-label">
            <strong>
              <span>Name: </span>
            </strong>
            <input type="text" placeholder="Full Name" />
          </label>

          <label className="form-label">
            <strong>
              <span>Email: </span>
            </strong>
            <input type="email" placeholder="Email" />
          </label>

          <label className="form-label">
            <strong>
              <span>Phone Number: </span>
            </strong>
            <input type="text" placeholder="999-9999-9999" />
          </label>

          {/* fake upload PDF */}
          <label className="form-label">
            <strong>
              <span>Upload Your Resume: </span>
            </strong>
            {/* <input
              type="text" /> */}
            <input className="file-upload" type="file" />
          </label>

          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );

}

export default NewResumeForm;