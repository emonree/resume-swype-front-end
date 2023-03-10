import React, { useState, useRef, useEffect } from "react";
import "./Resume.css";
import TinderCard from "react-tinder-card";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack5";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { IconButton } from "@mui/material";
const url = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = url; // this is required to fix the routing issue in the url when navigating to another path

const Resume = (props) => {
  const resume = props.resume;
  const cardRef = useRef();

  const [numPages, setNumPages] = useState(null);
  const [pdfWidth, setPdfWidth] = useState(400);
  const pageNumber = 1;

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const swipe = (dir) => {
    cardRef.current.swipe(dir);
  };

  useEffect(() => {
    const resumeCard = document.getElementsByClassName("resume-card")[0];
    const cardWidth = resumeCard.clientWidth;

    const newPdfWidth = cardWidth - 20;
    setPdfWidth(newPdfWidth);
    console.log(newPdfWidth);
  }, []);

  return (
    <TinderCard
      className="swipe"
      key={resume.id}
      ref={cardRef}
      preventSwipe={["up", "down"]}
    >
      <div className="applicant-info">
        <div>
          <p>
            <strong>
              <span>Name: </span>
            </strong>
            {resume.name}
          </p>
          <p>
            <strong>
              <span>Email: </span>
            </strong>
            {resume.email}
          </p>
          <p>
            <strong>
              <span>Phone Number: </span>
            </strong>
            {resume.phone}
          </p>
        </div>
        <div className="open-new-tab">
          <a
            className="view-pdf"
            href={resume.resume_url}
            target="_blank"
            rel="noreferrer"
          >
            View PDF
            <IconButton>
              <OpenInNewIcon></OpenInNewIcon>
            </IconButton>
          </a>
        </div>
      </div>
      {/* <div className="open-new-tab">
        <a
          className="view-pdf"
          href={resume.resume_url}
          target="_blank"
          rel="noreferrer"
        >
          View PDF
          <IconButton>
            <OpenInNewIcon></OpenInNewIcon>
          </IconButton>
        </a>
      </div> */}
      <div className="resume-card">
        <Document
          loading="Loading PDF..."
          file={resume.resume_url}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} width={pdfWidth} />
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </Document>
      </div>
      <div className="buttons">
        <IconButton className="reject" onClick={() => swipe("left")}>
          <CloseIcon color="error" fontSize="large" />
        </IconButton>
        <IconButton className="accept" onClick={() => swipe("right")}>
          <CheckCircleIcon color="success" fontSize="large" />
        </IconButton>
      </div>
    </TinderCard>
  );
};

export default Resume;
