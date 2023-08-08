# Eduqat User Registry Service

A simple service contains some functions that runnable

## Setup

In the first step you have to install all the dependency libraries by invoking the following commands

### Using Yarn

```bash
yarn install
```

### Using NPM

```bash
npm install
```

You may notice that there is a `docker-compose.yaml` file to helps you run dependency services that required to run the functions

```bash
docker-compose up -d dynamodb
```

The above command will spin up the DynamoDB on your local, and you can also run the DynamoDB Admin app by using the following command

```bash
docker-compose up -d dynamodb-admin
```
