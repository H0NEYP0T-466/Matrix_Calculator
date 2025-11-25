# 🤝 Contributing to Matrix_Calculator

First off, thank you for considering contributing to Matrix_Calculator! It's people like you that make this project such a great tool.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#-reporting-bugs)
  - [Suggesting Features](#-suggesting-features)
  - [Pull Requests](#-pull-requests)
- [Development Setup](#-development-setup)
- [Code Style Guidelines](#-code-style-guidelines)
- [Testing](#-testing)
- [Documentation](#-documentation)

---

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating a bug report, please check the [existing issues](https://github.com/H0NEYP0T-466/Matrix_Calculator/issues) to avoid duplicates.

When you create a bug report, please include:

- **Clear and descriptive title**
- **Steps to reproduce the behavior**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (OS, browser, Node.js version)
- **Error logs** (if available)

### 💡 Suggesting Features

Feature requests are welcome! When suggesting a feature:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the proposed feature
- **Explain why this feature would be useful**
- **Include mockups or examples** if possible
- **Consider the scope** – is this a major change or a minor enhancement?

### 📥 Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following our code style guidelines
3. **Add tests** if applicable
4. **Update documentation** if needed
5. **Ensure the test suite passes**
6. **Submit your pull request**

---

## 🛠 Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Setup Steps

1. **Fork the repository** on GitHub

2. **Clone your fork:**

   ```bash
   git clone https://github.com/YOUR_USERNAME/Matrix_Calculator.git
   cd Matrix_Calculator
   ```

3. **Add the upstream remote:**

   ```bash
   git remote add upstream https://github.com/H0NEYP0T-466/Matrix_Calculator.git
   ```

4. **Install dependencies:**

   ```bash
   # Frontend dependencies
   npm install
   
   # Backend dependencies
   cd backend
   npm install
   ```

5. **Create a new branch:**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

6. **Start development servers:**

   ```bash
   # Terminal 1 - Frontend
   npm run dev
   
   # Terminal 2 - Backend
   cd backend
   npm start
   ```

---

## 📏 Code Style Guidelines

### General

- Use **2 spaces** for indentation
- Use **meaningful variable and function names**
- Write **self-documenting code**
- Keep functions **small and focused**

### JavaScript/React

- Follow ESLint rules configured in the project
- Use **functional components** with hooks
- Use **arrow functions** for component definitions
- Destructure props and state

```javascript
// Good
const MyComponent = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

// Avoid
function MyComponent(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}
```

### CSS

- Use **BEM naming convention** where applicable
- Keep styles **scoped to components**
- Use **CSS variables** for theming

### Linting

Before submitting, run the linter:

```bash
npm run lint
```

---

## 🧪 Testing

Currently, the project uses ESLint for code quality. When adding new features:

- Ensure existing functionality isn't broken
- Test across different browsers if making UI changes
- Test API endpoints manually or with tools like Postman

---

## 📚 Documentation

- Update the **README.md** if you change functionality
- Add **JSDoc comments** for complex functions
- Update **inline comments** for non-obvious code

---

## 🏷 Commit Message Guidelines

Use clear and descriptive commit messages:

```
feat: add matrix eigenvalue calculation
fix: resolve division by zero in determinant
docs: update installation instructions
style: format code with prettier
refactor: simplify matrix multiplication logic
test: add unit tests for inverse function
chore: update dependencies
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

---

## 🙏 Thank You

Your contributions make this project better for everyone. Thank you for taking the time to contribute!

If you have any questions, feel free to open an issue or reach out through GitHub discussions.
