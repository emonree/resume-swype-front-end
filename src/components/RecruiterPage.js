import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./RecruiterPage.css";

const RecruiterPage = () => {

  const [resumes, setResumes] = useState([])
  // on page load, get the resume data with axios

  // useEffect goes here
  useEffect(() => {
    axios.get("localhost:8000/api/resumes")
      .then((response) => {
      setResumes(response.data);
    });
  }, [])

  // const handleAccept = () => {

  // }
}