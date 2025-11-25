# Matrix_Calculator

<p align="center">

  <!-- Core -->
  ![GitHub License](https://img.shields.io/github/license/H0NEYP0T-466/Matrix_Calculator?style=for-the-badge&color=brightgreen)
  ![GitHub Stars](https://img.shields.io/github/stars/H0NEYP0T-466/Matrix_Calculator?style=for-the-badge&color=yellow)
  ![GitHub Forks](https://img.shields.io/github/forks/H0NEYP0T-466/Matrix_Calculator?style=for-the-badge&color=blue)
  ![GitHub Issues](https://img.shields.io/github/issues/H0NEYP0T-466/Matrix_Calculator?style=for-the-badge&color=red)
  ![GitHub Pull Requests](https://img.shields.io/github/issues-pr/H0NEYP0T-466/Matrix_Calculator?style=for-the-badge&color=orange)
  ![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge)

  <!-- Activity -->
  ![Last Commit](https://img.shields.io/github/last-commit/H0NEYP0T-466/Matrix_Calculator?style=for-the-badge&color=purple)
  ![Commit Activity](https://img.shields.io/github/commit-activity/m/H0NEYP0T-466/Matrix_Calculator?style=for-the-badge&color=teal)
  ![Repo Size](https://img.shields.io/github/repo-size/H0NEYP0T-466/Matrix_Calculator?style=for-the-badge&color=blueviolet)
  ![Code Size](https://img.shields.io/github/languages/code-size/H0NEYP0T-466/Matrix_Calculator?style=for-the-badge&color=indigo)

  <!-- Languages -->
  ![Top Language](https://img.shields.io/github/languages/top/H0NEYP0T-466/Matrix_Calculator?style=for-the-badge&color=critical)
  ![Languages Count](https://img.shields.io/github/languages/count/H0NEYP0T-466/Matrix_Calculator?style=for-the-badge&color=success)

  <!-- Community -->
  ![Open Source Love](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red?style=for-the-badge)

</p>

An AI-powered matrix calculator web application that provides instant solutions for matrix operations, complete with step-by-step explanations. Built with React, Vite, and powered by Google's Generative AI.

---

## 🔗 Links

- [Issues](https://github.com/H0NEYP0T-466/Matrix_Calculator/issues)
- [Contributing](./CONTRIBUTING.md)
- [Security Policy](./SECURITY.md)
- [Code of Conduct](./CODE_OF_CONDUCT.md)

---

## 📑 Table of Contents

- [Installation](#-installation)
- [Usage](#-usage)
- [Features](#-features)
- [Folder Structure](#-folder-structure)
- [Contributing](#-contributing)
- [License](#-license)
- [Security](#-security)
- [Code of Conduct](#-code-of-conduct)
- [Tech Stack](#-tech-stack)
- [Dependencies](#-dependencies--packages)

---

## 🚀 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Google Generative AI API Key (for backend)

### Setup Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/H0NEYP0T-466/Matrix_Calculator.git
   cd Matrix_Calculator
   ```

2. **Install frontend dependencies:**

   ```bash
   npm install
   ```

3. **Install backend dependencies:**

   ```bash
   cd backend
   npm install
   ```

4. **Configure environment variables:**

   Create a `.env` file in the `backend` directory with your API key:

   ```env
   GEMINI_API_KEY=your_google_genai_api_key
   ```

5. **Start the backend server:**

   ```bash
   cd backend
   npm start
   ```

6. **Start the frontend development server:**

   ```bash
   # From the root directory
   npm run dev
   ```

7. **Open the app:**

   Navigate to `http://localhost:5173` in your browser.

---

## ⚡ Usage

1. **Launch the application** by following the installation steps above.
2. **Enter your matrix** values in the input fields.
3. **Select an operation** (addition, subtraction, multiplication, determinant, inverse, transpose, etc.).
4. **Click "Calculate Now!"** to get instant results.
5. **View step-by-step explanations** powered by AI.

---

## ✨ Features

- **Matrix Operations** – Addition, subtraction, multiplication, and more
- **AI Explanations** – Get detailed explanations powered by Google's Generative AI
- **Step-by-Step Solutions** – Understand how the calculation was performed
- **Modern UI** – Smooth animations with GSAP
- **Math Rendering** – Beautiful mathematical notation with KaTeX
- **Responsive Design** – Works on desktop and mobile devices

---

## 📂 Folder Structure

```
Matrix_Calculator/
├── backend/
│   ├── controller/
│   │   └── controller.js
│   ├── model/
│   │   └── ai_model.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── public/
├── Router/
│   └── Router.jsx
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Nav_bar.jsx
│   │   ├── Nav_bar.css
│   │   ├── Page.jsx
│   │   ├── Page.css
│   │   ├── Reveiw_page.jsx
│   │   └── Reveiw_Page.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── SECURITY.md
└── CODE_OF_CONDUCT.md
```

---

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guidelines](./CONTRIBUTING.md) for details on how to submit pull requests, report bugs, and suggest features.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## 🛡 Security

For reporting security vulnerabilities, please read our [Security Policy](./SECURITY.md).

---

## 📏 Code of Conduct

Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md) to ensure a welcoming and inclusive community.

---

## 🛠 Tech Stack

### Languages

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Frameworks & Libraries

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

### DevOps / CI / Tools

![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

### Cloud / AI Services

![Google AI](https://img.shields.io/badge/Google_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)

---

## 📦 Dependencies & Packages

<details>
<summary><strong>Frontend - Runtime Dependencies</strong></summary>

[![axios](https://img.shields.io/npm/v/axios?style=for-the-badge&label=axios)](https://www.npmjs.com/package/axios) – Promise based HTTP client for the browser and Node.js

[![gsap](https://img.shields.io/npm/v/gsap?style=for-the-badge&label=gsap)](https://www.npmjs.com/package/gsap) – Professional-grade animation library

[![react](https://img.shields.io/npm/v/react?style=for-the-badge&label=react)](https://www.npmjs.com/package/react) – A JavaScript library for building user interfaces

[![react-dom](https://img.shields.io/npm/v/react-dom?style=for-the-badge&label=react-dom)](https://www.npmjs.com/package/react-dom) – React package for working with the DOM

[![react-markdown](https://img.shields.io/npm/v/react-markdown?style=for-the-badge&label=react-markdown)](https://www.npmjs.com/package/react-markdown) – Render Markdown as React components

[![react-router](https://img.shields.io/npm/v/react-router?style=for-the-badge&label=react-router)](https://www.npmjs.com/package/react-router) – Declarative routing for React

[![react-router-dom](https://img.shields.io/npm/v/react-router-dom?style=for-the-badge&label=react-router-dom)](https://www.npmjs.com/package/react-router-dom) – DOM bindings for React Router

[![rehype-katex](https://img.shields.io/npm/v/rehype-katex?style=for-the-badge&label=rehype-katex)](https://www.npmjs.com/package/rehype-katex) – Rehype plugin to render math with KaTeX

[![remark-math](https://img.shields.io/npm/v/remark-math?style=for-the-badge&label=remark-math)](https://www.npmjs.com/package/remark-math) – Remark plugin to support math

</details>

<details>
<summary><strong>Frontend - Dev Dependencies</strong></summary>

[![@eslint/js](https://img.shields.io/npm/v/@eslint/js?style=for-the-badge&label=@eslint/js)](https://www.npmjs.com/package/@eslint/js) – ESLint JavaScript plugin

[![@types/react](https://img.shields.io/npm/v/@types/react?style=for-the-badge&label=@types/react)](https://www.npmjs.com/package/@types/react) – TypeScript definitions for React

[![@types/react-dom](https://img.shields.io/npm/v/@types/react-dom?style=for-the-badge&label=@types/react-dom)](https://www.npmjs.com/package/@types/react-dom) – TypeScript definitions for React DOM

[![@vitejs/plugin-react](https://img.shields.io/npm/v/@vitejs/plugin-react?style=for-the-badge&label=@vitejs/plugin-react)](https://www.npmjs.com/package/@vitejs/plugin-react) – Official React plugin for Vite

[![eslint](https://img.shields.io/npm/v/eslint?style=for-the-badge&label=eslint)](https://www.npmjs.com/package/eslint) – Pluggable JavaScript linter

[![eslint-plugin-react-hooks](https://img.shields.io/npm/v/eslint-plugin-react-hooks?style=for-the-badge&label=eslint-plugin-react-hooks)](https://www.npmjs.com/package/eslint-plugin-react-hooks) – ESLint rules for React Hooks

[![eslint-plugin-react-refresh](https://img.shields.io/npm/v/eslint-plugin-react-refresh?style=for-the-badge&label=eslint-plugin-react-refresh)](https://www.npmjs.com/package/eslint-plugin-react-refresh) – Validate React Refresh

[![globals](https://img.shields.io/npm/v/globals?style=for-the-badge&label=globals)](https://www.npmjs.com/package/globals) – Global identifiers from different JavaScript environments

[![vite](https://img.shields.io/npm/v/vite?style=for-the-badge&label=vite)](https://www.npmjs.com/package/vite) – Next generation frontend tooling

</details>

<details>
<summary><strong>Backend - Runtime Dependencies</strong></summary>

[![@google/genai](https://img.shields.io/npm/v/@google/genai?style=for-the-badge&label=@google/genai)](https://www.npmjs.com/package/@google/genai) – Google Generative AI SDK

[![cors](https://img.shields.io/npm/v/cors?style=for-the-badge&label=cors)](https://www.npmjs.com/package/cors) – Node.js CORS middleware

[![dotenv](https://img.shields.io/npm/v/dotenv?style=for-the-badge&label=dotenv)](https://www.npmjs.com/package/dotenv) – Loads environment variables from .env file

[![express](https://img.shields.io/npm/v/express?style=for-the-badge&label=express)](https://www.npmjs.com/package/express) – Fast, unopinionated web framework for Node.js

</details>

---

<p align="center">Made with ❤ by H0NEYP0T-466</p>
