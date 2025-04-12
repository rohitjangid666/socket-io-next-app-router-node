# Website Project

This repository contains both the client-side (Next.js) and server-side (Node.js) code for a full-stack web application. The `client` directory holds the Next.js frontend, while the `server` directory contains the Node.js backend. This project is organized as a monorepo, which means both client and server are stored in the same repository for easier management.

## Project Structure

```
socket-io-next-app-router-node/
├── client/          # Next.js frontend code
│   ├── public/      # Static assets (images, fonts, etc.)
|   |-- src/
│   |   ├── app/     # Next.js app
│   |   └── ...
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

- [Node.js](https://nodejs.org/) (Version 20.x or above)
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

### 3. Environment Variables (Optional)

If your server requires environment variables (e.g., for database connections), you can create a `.env` file in the `server` directory with the necessary variables. Example:

```
DATABASE_URL=mongodb://localhost:27017/mydatabase
JWT_SECRET=your_jwt_secret
PORT=5000
```

> Ensure you configure any other environment variables as needed based on your project's requirements.

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

## Deployment

To deploy your project, you will need to deploy both the frontend and backend separately. Here are some options for each:

### Client Deployment

- **Vercel**: Recommended for Next.js projects. Just connect the GitHub repository, and Vercel will automatically handle deployments for you.
- **Netlify**: Another popular option for Next.js, with support for static and server-side rendered (SSR) apps.

### Server Deployment

- **Heroku**: Easy-to-use cloud platform for Node.js applications.
- **DigitalOcean**: You can set up a Node.js server on a Droplet and deploy the server manually.
- **AWS / Google Cloud**: For more advanced deployments.

### Build & Deploy to Production

For production builds, run the following command in the `client` directory:

```bash
cd client
npm run build
npm start
```

For the server, make sure your environment variables and production configurations are set before deploying.

## Git Workflow

This repository follows a simple git workflow. You can manage the client and server code within the same repository, but you may want to consider using separate branches if necessary for specific features or stages of development.

- **Feature branches**: Create branches for new features, bug fixes, or experiments.
- **Main branch**: Keep the main branch for production-ready code.

For example:

```bash
git checkout -b feature/client-authentication
# Work on client-side authentication
git checkout -b feature/server-api-endpoints
# Work on backend API endpoints
```

## Troubleshooting

If you run into issues, try the following steps:

1. **Ensure dependencies are installed**: Run `npm install` in both the `client` and `server` directories.
2. **Check for errors in the terminal**: Both the client and server logs will show errors. If there's a problem, it should be visible there.
3. **Check the ports**: Make sure your client and server are running on different ports (e.g., `3000` for client and `5000` for server).

## Contributing

We welcome contributions to this project! If you'd like to help improve the code, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Push the changes to your fork.
5. Open a pull request with a clear description of what you've done.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
