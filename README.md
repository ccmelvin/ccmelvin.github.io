# Plane Spotter Website

This project is a website for a plane spotting business that includes features like live YouTube streams, an Instagram feed, a gallery of plane spotting photos, and more. The site is built using React, TypeScript, and CSS, and is designed to be fast, responsive, and easy to maintain.

## Table of Contents

- [Plane Spotter Website](#plane-spotter-website)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
  - [Features](#features)
  - [Folder Structure](#folder-structure)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
    - [Running the Project](#running-the-project)
  - [Contributing](#contributing)

## Getting Started

Follow these instructions to set up the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (with npm)
- A code editor like [VSCode](https://code.visualstudio.com/)

## Features

- **Live YouTube Streams**: Embed live streams from YouTube.
- **Instagram Feed**: Display the latest posts from Instagram.
- **Photo Gallery**: Showcase plane spotting photos and videos.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Modular Components**: Easy to maintain and scale.

## Folder Structure

The project structure is as follows:

```plaintext
plane-spotter-website/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── index.tsx
│   └── main.tsx
├── .gitignore
├── package.json
├── tsconfig.json
└── vite.config.ts
```

- **public/**: Contains static assets like images, favicon, and index.html.
- **src/**: Contains the main source code.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript.
- **CSS**: Styling for the website.
- **Vite**: Fast build tool for modern web development.
- **ESLint**: Linting tool for JavaScript and TypeScript.
- **Prettier**: Code formatting tool.
- **Jest**: Testing framework.
- **React Router**: Routing for React applications.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/plane-spotter-website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd plane-spotter-website
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Project

   Start the development server:

   ```bash
   npm run dev
   ```

Open your browser and navigate to <http://localhost:3000> to view the website.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

1. Fork the project.
2. Create your feature branch **(git checkout -b feature/new-feature)**.
3. Commit your changes **(git commit -am 'Add a new feature')**.
4. Push to the branch **(git push origin feature/new-feature)**.
5. Create a new Pull Request.
