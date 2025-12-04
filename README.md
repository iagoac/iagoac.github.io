# 💻 Iago Carvalho Personal & Academic Website

This repository contains the source code for my personal and professional website, hosted on GitHub Pages. This site serves as a central hub for my academic portfolio, research projects, teaching materials, and professional profile.

**🌐 Live Site:** [https://iagoac.github.io](https://iagoac.github.io)

## ✨ Features

* **Professional Portfolio:** Showcasing research publications and projects.
* **Curriculum Vitae (CV):** A readily accessible and up-to-date professional summary.
* **Static & Fast:** Built for speed and reliability as a static two-page application.
* **Type Safety:** Developed entirely in TypeScript for robust, maintainable code.

## 🛠️ Technology Stack

The project leverages modern JavaScript tooling and a static deployment model.

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Language** | TypeScript | Ensures type safety and scalability. |
| **Runtime** | Node.js | Used exclusively for build tooling and dependency management. |
| **Styling** | Tailwind CSS | Provides modern, responsive styling. |

## 🏗️ Project StructureDirectory

| Directory/File | Purpose |
| :--- | :--- |
| **`src/`** | **Source Code.** Contains all the TypeScript, HTML templates, and styles. |
| **`.github/workflows/`** | Contains the automated CI/CD pipeline script (`deploy.yml`). |
| **`src/package.json`** | Project metadata, dependencies, and build scripts. |

## 🚀 Getting Started (Local Development)

To run and develop the website locally, ensure you have Node.js (v18+) and npm installed.

### 1. Clone the Repository

```bash
git clone https://github.com/iagoac/iagoac.github.io.git
cd iagoac.github.io
```

### 2. Install dependencies

Use `npm ci` (clean install) for reproducible dependency management in both local and CI environments:

```bash
npm ci
```

### 3. Run locally

Start the local development server. This command will watch for file changes in the `src/` directory and automatically reload the application. Tipically, the site will run on `http://localhost:3000`:

```bash
npm run dev
```

### 4. Build for Production

To manually compile the final static assets. It will generate the output files in HTML format

```bash
npm run build
```

## ⚙️ CI/CD and Deployment

Deployment to https://iagoac.github.io is fully automated using GitHub Actions, eliminating the need for local deployment steps.

Source Branch: All development and commits are pushed to the main branch.

Automation: The .github/workflows/deploy.yml workflow automatically triggers on every successful push to main.

Build & Artifact: The workflow installs dependencies, runs npm run build, and uploads the resulting dist/ directory as a deployment artifact.

Deployment: The official deploy-pages action publishes the artifact to GitHub Pages.

## ✉️ Contact and License

### Contact
For professional inquiries, academic collaboration, or questions regarding the repository, please reach out via email: iago.carvalho@unifal-mg.edu.br. Alternatively, you can schedule a meeting using my [Calendly](calendly.com/iagoac)

### License
This project is licensed under the Ununlicense. For full details, please refer to the ```LICENSE``` file in the repository root.