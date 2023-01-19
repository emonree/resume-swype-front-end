# Resume-Swype Front-End

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

- MUI icons: `https://mui.com/material-ui/material-icons/`