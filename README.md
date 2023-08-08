# Eduqat User Registry Service

A simple service containing some functions that work and simulate user management operations

## Prerequisites

- Node.js runtime (min. version `18.16.0`)
- Serverless console (min. version `3.34.0`)
- Docker environment (min. version `24.0.2`)
- *(optional)* Yarn package manager (min. version `1.22.17`)

## Setup

On the first step you have to install all the dependency libraries by invoking one of these following commands

### Using Yarn

```bash
yarn install
```

### Using NPM

```bash
npm install
```

You may notice that there is a `docker-compose.yaml` file to helps you run the dependency services that required to run the functions.

To run it do the below command

```bash
docker-compose up -d dynamodb
```

The above command will spin up the DynamoDB on your local machine and you can also run the DynamoDB Admin app by using the following command (only if you need)

```bash
docker-compose up -d dynamodb-admin
```

## Deploying the service

To deploy the service via Serverless console, you can use the following command

```bash
npm run dev
```

The command will deploy the service through HTTP that accessible on `http://localhost:3000`, you can use a REST API client such as Postman or any other tools that you like.
