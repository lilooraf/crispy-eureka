# Cryspy Eureka

## Overview

This project consists of a React client and an Express server. The React client provides the user interface, while the Express server handles backend logic and API requests.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended version: LTS)
- [npm](https://www.npmjs.com/) (Included with Node.js)

## Project Structure

```
/project-root
  ├── client/        # React client application
  └── server/        # Express server application
```

## Installation

### Dependencies

#### Server

Navigate to the `server` directory and install the dependencies:
```bash
cd server
npm install
```

#### Client

Navigate to the `client` directory and install the dependencies:
```bash
cd client
npm install
```

## Build

### Server

To build the server application for production, run:
```bash
cd server
npm run build
```

This command will compile the server code into a `dist` directory.

### Client

To build the client application for production, run:
```bash
cd client
npm run build
```

This command will create a production-ready build in the `build` directory.

## Running

### Server

To start the server application, use:
```bash
cd server
npm start
```

The server will start and listen for requests. By default, it will be accessible at `http://localhost:3001` (or the port defined in your configuration).

### Client

To serve the client application, you can use the `serve` package to serve the production build:
1. Install `serve` globally if you haven't already:
    ```bash
    npm install -g serve
    ```
2. Navigate to the `client` directory and run:
    ```bash
    cd client
    serve -s build
    ```

The client application will be accessible at `http://localhost:3000` (or another port if specified).

## Development

### Server

For development, you can use:
```bash
cd server
npm run dev
```

This typically uses `nodemon` or a similar tool to watch for changes and automatically restart the server.

### Client

For development, you can use:
```bash
cd client
npm start
```

This will start a development server with hot-reloading. The client will be accessible at `http://localhost:3000` (or another port if specified).

## Environment Variables

Both the client and server applications may require environment variables. Ensure you have the following set up:

### Server

Create a `.env` file in the `server` directory with the following content:
```
PORT=3001
```

### Client

For environment-specific settings in the React app, create a `.env` file in the `client` directory:
```
REACT_APP_API_URL=http://localhost:3001/api
```