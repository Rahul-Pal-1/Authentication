# Express Authentication Project

This project implements user authentication using JSON Web Tokens (JWT) in an Express application.

## Table of Contents

- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Setup](#setup)
- [Usage](#usage)
- [Routes](#routes)
- [Middleware](#middleware)
- [Models](#models)
- [Configuration](#configuration)

## Project Structure
```
project-root
│
├── public
│   ├── css
│   │   └── styles.css
│   └── js
│       └── script.js
│
├── View
│   ├── home.ejs
│   ├── signup.ejs
│   └── login.ejs
│
├── Router
│   ├── user.js
│   └── auth.js
│
├── middlewares
│   └── jwtauth.js
│
├── model
│   └── user.js
│
├── connection.js
├── app.js
└── package.json
```

## Dependencies

- `express`: Web framework for Node.js
- `mongoose`: MongoDB object modeling tool
- `bcrypt`: Library for hashing passwords
- `jsonwebtoken`: JSON Web Token implementation for Node.js
- `cookie-parser`: Parse cookie header and populate `req.cookies` with an object keyed by cookie names
- Other dependencies can be listed from `package.json`

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up the MongoDB connection in `connection.js`.
4. Run the server using `node app.js`.

## Usage

1. Access the `/signup` route to register a new user.
2. Access the `/login` route to log in with registered credentials.
3. Upon successful login, the user is redirected to the home page.
4. Access the home page (`/home`) to view user-specific content.

## Routes

- `/signup`: Register a new user.
- `/login`: Log in with registered credentials.
- `/home`: View user-specific content after successful login.

## Middleware

- `jwtauth.js`: Middleware for authentication using JSON Web Tokens (JWT).

## Models

- `user.js`: Model for storing user data, including name, email, and hashed password.

## Configuration

- MongoDB connection settings are configured in `connection.js`.
- JSON Web Token secret key and expiration time are configured in `postLogIn` route of `auth.js`.



