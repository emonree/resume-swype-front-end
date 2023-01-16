import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewResumeForm from "./components/NewResumeForm";
import RecruiterPage from "./components/RecruiterPage";
import Resumes from "./components/Resumes";
import Resume from "./components/Resume";
import "./App.css";

const App = () => {
  // HOOKS
  const [resumes, setResumes] = useState([]);
  const [showResumes, setShowResumes] = useState(true);

  // useEffect(() => {
  //   getResumes();
  // }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<NewResumeForm />}
        />
        <Route
          path="/recruiterpage"
          element={<RecruiterPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
