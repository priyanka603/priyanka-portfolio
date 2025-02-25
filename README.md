# Portfolio
This project is a personal portfolio website showcasing my skills, experience, projects, and certifications. The website is built using React, Tailwind CSS, and Material-UI, and it includes various sections such as Home, About, Education, Skills, Experience, Projects, and Certifications.

## Table of Contents

- Getting Started
- Available Scripts
- Project Structure
- Dependencies
- Features

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

```sh
git clone https://github.com/priyanka603/priyanka-portfolio.git
```

2. Navigate to the project directory:

```sh
cd priyanka-portfolio
```

3. Install the dependencies:

```sh
npm install
```

4. Start the development server:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

## Project Structure

The project structure is as follows:

```
├── public/
│   ├── certificates/
│   ├── icons/
│   ├── images/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── ...
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Certifications.js
│   │   ├── CVButton.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── FloatingContactButton.js
│   │   ├── Home.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── SocialBar.js
│   │   └── ...
│   ├── hooks/
│   │   └── useInView.js
│   ├── styles/
│   │   └── Home.css
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── ...
```

## Dependencies

The project uses the following dependencies:

- React
- Tailwind CSS
- Material-UI
- EmailJS
- React Icons
- Intersection Observer API

## Features

- **Responsive Design**: The website is fully responsive and works on all devices.
- **Animations**: Smooth animations for various elements using CSS and Material-UI.
- **Certifications**: View and download certifications.
- **Contact Form**: Floating contact button to send messages via EmailJS.
- **Skills**: Display of skills with icons.
- **Projects**: Showcase of projects with descriptions and technologies used.

---

Thank you for visiting my portfolio! If you have any questions or suggestions, feel free to open an issue or contact me directly.


