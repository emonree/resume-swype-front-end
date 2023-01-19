# Resume-Swype Front-End

## What The App Does:
- Resume Swype is for recruiters to view resumes. The average time a recruiter will spend looking at a resume is 6 seconds! With this app, the recruiter can simply click a button or swipe to accept or reject the resume.
- I used the `Tinder Card` library for the swipe feature and to display each resume as a "card". 
- On page load, applicants applying for a job are required to fill out a form with their Name, Email, and Phone #. They are then required to submit their resume in PDF format as stated on top. Once the application is successfully submitted, an alert will pop up saying "You have successfully submitted your resume!"
- IDEALLY, the recruiter would be able to leave a note or inform the applicant whether he/she got the job or not through email, but I have not gotten that far in terms of how to implement that.
- In the url path `/recruiterpage`, the applicant's information and resume will appear on the screen.
- I also added a `view PDF` button for the recruiter to open the resume in a new tab to view it in full because it might not be big enough on the app. 
----

## Redux Toolkit
- Redux allows you to access data within a "store" from any component without having to do something with useState hooks and passing props between components.
- Redux provides a `useSelector` hook to grab that data.
----

## Difficulties:
- Error after deploying to Netlify. Error message was `react pdf require is not defined`. I googled the error message and clicked on the first search that came up: `https://github.com/wojtekmaj/react-pdf/issues/782`. This comment `https://github.com/wojtekmaj/react-pdf/issues/782#issuecomment-885458281` helped resolve the issue.

- Error `Page Not Found 404` when navigating to a path supported by React Router, Netlify gave this error. I googled the message and came across this site: `https://dev.to/rajeshroyal/page-not-found-error-on-netlify-reactjs-react-router-solved-43oa`. I created a `_redirects` file in the public directory and added `/* /index.html 200` inside the file.
----

## Sources:
- Redux Toolkit: `https://react-redux.js.org/tutorials/quick-start`

- Tinder Card Library: `https://www.npmjs.com/package/react-tinder-card?activeTab=readme`

- React-PDF viewer: `https://www.npmjs.com/package/react-pdf`

- React file upload: `https://gist.github.com/AshikNesin/e44b1950f6a24cfcd85330ffc1713513`

- React wrap balancer used to make words look nicer when wrapped: `https://react-wrap-balancer.vercel.app/`

- MUI icons: `https://mui.com/material-ui/material-icons/`