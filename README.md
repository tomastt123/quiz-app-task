# Bored Panda Quiz task app

I built the quiz as a simple React single-page app using Create React App, React Router for navigation, and CSS Modules for scoped styling. All questions and result buckets live in plain JSON files, and I created three pages—Intro, Quiz, and Result—each as its own component. In the Quiz page I track question index and correct-answer count in state, render one question (with its image) at a time. When the user finishes, we navigate to the Result page, look up their performance against our result definitions, and display the appropriate message. Finally, I added a Netlify redirect so client-side routes load correctly, and the code is ready to push to GitHub and deploy.


## A list of tasks to be undertaken after proof-of-concept, along with time estimates:

After the POC, I’d spend about 4 hrs polishing the UI and making it fully responsive, then 2 hrs on accessibility (keyboard support, ARIA labels, contrast). Next, I’d allocate 3 hrs to centralize state management and persist progress in localStorage, and about 5 hrs to build a lightweight Node/Express backend with a simple database for question storage. I’d set aside 2 hrs for input validation and error handling, and 5 hrs for automated testing (unit tests for scoring logic plus end-to-end flow tests). Performance optimizations (code splitting, lazy loading, image compression) would take 2 hrs, while SEO and metadata setup (meta tags, Open Graph) would need 1 hr. Analytics and monitoring (e.g. Google Analytics, Sentry) would be another 1 hr, CI/CD pipeline configuration with GitHub Actions and auto-deploys 2 hrs, documentation and README updates 1.5 hrs, and final deployment with custom domain and SSL 1.5 hrs—about 30 hrs total.

## Your reflection on the test task and your experience performing it: 

A very simple task, but fun to do nonetheless.

## Live version

Netlify - https://bpandatask.netlify.app/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
