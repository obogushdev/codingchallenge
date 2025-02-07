## Description

### LineTweet coding challenge

#### Oleksandr Bohush

## Installation

```bash
$ npm install
```

## Running the app

```bash
# to start server
$ npm run start

# to start server in watch mode
$ npm run start:debug

# by default server will start at http://localhost:3000
# to change port value update .env file as shown in .env_example file
```

## Endpoints

| Method | URL             | Description                   |
| ------ | --------------- | ----------------------------- |
| `POST` | `/appointments` | single appointment processing |

Swagger path (default): http://localhost:3000/api-docs/ \
Postman collection path: coding_challenge.postman_collection.json

## Tests

```bash
# to run test
$ npm run test

# to run test with coverage report
$ npm run test:coverage
```

## Formatting

```bash
# to run prettier formatting
$ npm run format

# to run eslint check script
$ npm run lint

# to run eslint check and fix script
$ npm run lint:fix
```
