import React, { useState, useRef } from "react";
import "./Resume.css";
import TinderCard from "react-tinder-card";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
// import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import PlaceholderPDF from "../images/resume_placeholder.pdf";

const Resume = (props) => {
  const resume = props.resume;
  const cardRef = useRef();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const swipe = (dir) => {
    cardRef.current.swipe(dir);
  };

  return (
    <TinderCard
      className="swipe"
      key={resume.id}
      ref={cardRef}
      preventSwipe={["up", "down"]}
    >
      <div>
        <p>
          <strong>Name: </strong>
          {resume.name}
        </p>
        <p>
          <strong>Email: </strong>
          {resume.email}
        </p>
        <p>
          <strong>Phone Number: </strong>
          {resume.phone}
        </p>
        <Document file={PlaceholderPDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </Document>
      </div>

      <IconButton className="reject" onClick={() => swipe("left")}>
        <CloseIcon color="error" fontSize="large" />
      </IconButton>
      <IconButton className="accept" onClick={() => swipe("right")}>
        <CheckCircleIcon color="success" fontSize="large" />
      </IconButton>
    </TinderCard>
  );
};

export default Resume;
