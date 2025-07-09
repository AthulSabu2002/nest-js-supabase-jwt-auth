<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# File Vault API

A secure file storage and management API built with NestJS and Supabase.

## Description

File Vault API is a RESTful service that allows users to securely store, retrieve, and manage their files. The project uses NestJS as the backend framework and Supabase for authentication and file storage.

## Tech Stack

- [NestJS](https://nestjs.com/) - Backend framework
- [Supabase](https://supabase.io/) - Authentication and storage
- TypeScript - Programming language

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Supabase account

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=3000
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Endpoints

### Authentication

- `POST /auth/signup` - Register a new user
  - Body: `{ "email": "user@example.com", "password": "password" }`

- `POST /auth/signin` - Login existing user
  - Body: `{ "email": "user@example.com", "password": "password" }`

- `GET /auth/profile` - Get user profile (requires authentication)
  - Header: `Authorization: Bearer your_jwt_token`

## Authentication

The API uses Supabase Authentication with JWT tokens. To access protected endpoints, include the JWT token in the Authorization header:

```
Authorization: Bearer your_jwt_token
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

For support, please open an issue in the repository or contact the project maintainers.

## License

This project is [MIT licensed](LICENSE).
