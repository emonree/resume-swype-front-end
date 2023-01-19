import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setResumes } from "../features/resume/resumeSlice"
import Resume from "./Resume";
import "./RecruiterPage.css";

const RecruiterPage = () => {
  const resumes = useSelector((state) => state.resume.resumes);
  const dispatch = useDispatch();

  // on page load, get the resume data with axios

  useEffect(() => {
    console.log("......");
    axios
      .get("https://pure-river-81433.herokuapp.com/api/resumes")
      .then((response) => {
        dispatch(setResumes(response.data)); // updates the redux store with the resumes data
      });
  }, [dispatch]);

  console.log(resumes);

  return (
    <div>
      {resumes.map((resume) => {
        return (
          <div key={resume.id} className="resume-container">
            <Resume resume={resume} />
          </div>
        );
      })}
    </div>
  );
};

export default RecruiterPage;
