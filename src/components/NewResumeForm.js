import React, { useState } from "react";
import axios from "axios";
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
  const [resumeFile, setResumeFile] = useState();

  const handleResumeSubmit = async (event) => {
    event.preventDefault();
    const newResume = {
      ...resume,
      resume_url: resumeFile,
    };
    console.log(newResume);

    // in order for django to handle the file as part of the form submission, this header is necessary
    const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:8000/api/resumes", newResume, headers)
      .then(() => {
        // show some sort of success message
        alert("You have successfully submitted your resume!");
      });
    // event.target.reset();
  };

  const handleChange = (event) => {
    setResume({ ...resume, [event.target.name]: event.target.value });
  };

  // handle getting a signed URL from backend for file upload to S3
  const handleFileSelected = (event) => {
    const file = event.target.files[0];
    setResumeFile(file);
    console.log(file);
  };

  return (
    <div>
      <div className="background-img">
      </div>
      <div className="new-resume-form">
        <h3 className="resume-header">
          1. Please fill out the information below.
          <br />
          2. Submit your resume in PDF format.
        </h3>
        <div className="form-container">
          <form className="submit-form" onSubmit={handleResumeSubmit}>
            <label className="form-label">
              <strong>
                <span>Name: </span>
              </strong>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
              />
            </label>

            <label className="form-label">
              <strong>
                <span>Email: </span>
              </strong>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </label>

            <label className="form-label">
              <strong>
                <span>Phone Number: </span>
              </strong>
              <input
                type="text"
                name="phone"
                placeholder="999-9999-9999"
                onChange={handleChange}
              />
            </label>

            {/* fake upload PDF */}
            <label className="form-label">
              <strong>
                <span>Upload Your Resume: </span>
              </strong>
              <input
                className="file-upload"
                type="file"
                onChange={handleFileSelected}
              />
            </label>

            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewResumeForm;