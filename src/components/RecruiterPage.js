import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setResumes } from '../features/resume/resumeSlice'
import "./RecruiterPage.css";

const RecruiterPage = () => {

  const resumes = useSelector((state) => state.resume.resumes)
  const dispatch = useDispatch()
  // const [resumes, setResumes] = useState([])
  // on page load, get the resume data with axios

  // useEffect goes here
  useEffect(() => {
    console.log("......")
    axios.get("http://localhost:8000/api/resumes")
      .then((response) => {
        dispatch(setResumes(response.data)); // updates the redux store with the resumes data
    });
  }, [])

  console.log(resumes)

  // const handleAccept = () => {

  // }
  return (
    <div>
      <h1>placeholder</h1>
    </div>
  )
}

export default RecruiterPage;