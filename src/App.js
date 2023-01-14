import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewResumeForm from "./components/NewResumeForm";
import "./App.css";

const App = () => {
  // HOOKS
  const [resumes, setResumes] = useState([]);
  const [showResumes, setShowResumes] = useState(true);

  // useEffect(() => {
  //   getResumes();
  // }, []);

  return (
    <>
      <div>
        <NewResumeForm />
        {/* <h1>Resume Swyper</h1> */}
      </div>
    </>
  );
};

export default App;
