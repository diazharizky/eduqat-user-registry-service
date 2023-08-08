# Eduqat User Registry Service

A simple service containing some functions that work and simulate user management operations.

## Prerequisites

- Node.js runtime (min. version `18.16.0`)
- Serverless CLI (min. version `3.34.0`)
- Docker environment (min. version `24.0.2`)
- AWS CLI (min. version `2.8.5`)
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

You can use the admin tool to check whether the database is ready or you can use the following command

```bash
aws dynamodb list-tables --endpoint-url http://localhost:8000
```

Once you ensure that the db is ready then we need to create the required table using the following command

```bash
aws dynamodb create-table \
  --table-name eduqat-user-registry-service-dev \
  --attribute-definitions AttributeName=id,AttributeType=S \
  --key-schema AttributeName=id,KeyType=HASH \
  --provisioned-throughput ReadCapacityUnits=3,WriteCapacityUnits=3 \
  --endpoint-url http://localhost:8000
```

## Deploying the service

To deploy the service via Serverless CLI, you can use the following command

```bash
npm run dev
```

The command will deploy the service through HTTP that accessible on `http://localhost:3000`, you can use a REST API client such as Postman or any other tools that you like.
