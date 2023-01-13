import React, { useState } from 'react'

const NewResumeForm = (props) => {
  let emptyPerson = {
    name: "",
    email: "",
    phone: "",
    resume_url: "",
    recruiter_notes: "",
    recruiter_accepted: "",
  };

  const [form, setForm] = useState(false);
  const [person, setPerson] = useState(emptyPerson);

  const handleUserChange = (event) => {
    props.setUser({ ...props.user, [event.target.name]: event.target.value })
  }

  const handleUserSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  }

  const handleChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  

}

export default NewResumeForm;