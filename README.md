# React Quiz Application with Backend Integration

## Overview

This is a full-stack quiz application built with ReactJS for the frontend and Node.js/Express with MongoDB for the backend. The app allows users to sign up, log in, and take a quiz. Only authenticated users can access the quiz, and user credentials are securely stored in the database.

---

## Features

- User Signup and Login (Authentication)
- Secure password storage using bcrypt hashing
- JWT-based session management
- Attractive UI with modals and background image
- Quiz questions fetched from a mock API
- State management using React Context API and useReducer
- Responsive design

---

## Tech Stack

- **Frontend:** ReactJS, Context API, useReducer, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** bcryptjs, jsonwebtoken (JWT)
- **Development Tools:** VS Code, json-server (for mock API)

---

## How the Application Works

1. **User Authentication:**
   - Users sign up with a username and password.
   - Passwords are hashed before being stored in MongoDB.
   - On login, credentials are verified and a JWT token is issued.
   - Only authenticated users can access the quiz.
2. **Quiz Flow:**
   - Authenticated users can start the quiz.
   - Questions are fetched from a mock API (json-server or static JSON file).
   - The app tracks progress, score, and highscore.
   - At the end, users see their results and can retry the quiz.

---

## Backend Integration

- The React frontend communicates with the backend via REST API endpoints (`/api/auth/signup`, `/api/auth/login`).
- The backend uses Express.js to handle requests and Mongoose to interact with MongoDB.
- CORS and proxy settings are configured for smooth development experience.

---

## How to Run the Application

### 1. Install Dependencies

Open a terminal in both the root and backend folders and run:

```powershell
npm install
```

### 2. Start the Backend Server

Navigate to the backend folder and run:

```powershell
node server.js
```

### 3. Start the Frontend React App

From the root folder, run:

```powershell
npm run start
```

### 4. (Optional) Start Mock API for Quiz Questions

```powershell
npm run server
```

---

## Authentication Details

- **Signup:**
  - User submits username and password.
  - Backend hashes the password and stores the user in MongoDB.
- **Login:**
  - User submits credentials.
  - Backend verifies credentials and returns a JWT token.
  - Frontend stores the token and allows access to the quiz.
- **Protected Routes:**
  - Only users with a valid token can start the quiz.

---

## Folder Structure

The-React-Quiz/  
├── backend/  
│   ├── models/  
│   │     └── User.js  
│   ├── routes/  
│   │   └── auth.js  
│   └── server.js  
├── src/  
│   ├── components/  
│   │   ├── Startscreen.js  
│   ├── Contexts/  
│   │   └── QuizContext.js  
│   ├── index.js  
│   ├── index.css  
│   └── questions.json  
├── package.json  

