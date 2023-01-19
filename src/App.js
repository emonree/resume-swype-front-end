import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewResumeForm from "./components/NewResumeForm";
import RecruiterPage from "./components/RecruiterPage";
import "./App.css";

const App = () => {

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
