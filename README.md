# Website Project

This repository contains both the client-side (Next.js) and server-side (Node.js) code for a full-stack web application. The `client` directory holds the Next.js frontend, while the `server` directory contains the Node.js backend. This project is organized as a monorepo, which means both client and server are stored in the same repository for easier management.

## Project Structure

```
socket-io-next-app-router-node/
├── client/          # Next.js frontend code
│   ├── app/         # Next.js pages
│   ├── components/  # React components
│   ├── public/      # Static assets (images, fonts, etc.)
│   └── ...
├── server/          # Node.js backend code
│   ├── controllers/ # Backend route handlers
│   ├── models/      # Database models (e.g., Mongoose models for MongoDB)
│   ├── app.js       # Main server file
│   └── ...
├── .gitignore       # Git ignore file
└── README.md        # This README file
```

## Prerequisites

Before you start, you will need to have the following tools installed:

- [Node.js](https://nodejs.org/) (Version 14.x or above)
- [Yarn](https://yarnpkg.com/) (or [npm](https://www.npmjs.com/) if you prefer)

## Installation

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone git@github.com:rohitjangid666/socket-io-next-app-router-node.git
cd socket-io-next-app-router-node
```

### 2. Install Dependencies

You'll need to install dependencies for both the client and the server.

#### For the Client (Next.js)

Navigate to the `client` folder and install the required dependencies:

```bash
cd client

# using yarn
yarn

# using npm
npm i
```

#### For the Server (Node.js)

Next, go to the `server` folder and install the backend dependencies:

```bash
cd ../server

# using yarn
yarn

# using npm
npm i
```

## Running the Project

### 1. Start the Server

Navigate to the `server` folder and start the Node.js server:

```bash
cd server

# for development
yarn dev

# for production
yarn start
```

The server should now be running on `http://localhost:5000` (or another port if configured).

### 2. Start the Client

Now, in another terminal window, navigate to the `client` folder and run the Next.js app:

```bash
cd client
yarn dev
```

The Next.js app should now be running on `http://localhost:3000`.

You can now access the application by visiting `http://localhost:3000` in your browser. The client will communicate with the server running on `http://localhost:5000` (or whichever port your backend uses).
