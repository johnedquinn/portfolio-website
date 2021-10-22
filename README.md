# Portfolio Website

Welcome !

This is a fun website that shows a bit who I am. It's been a while since I've worked on this project, but I'm working on making it more fun. As part of this recent effort, I'm migrating the website from AWS Amplify to using CodePipeline to deploy the app using AWS ECS. It's a work-in-progress, so stay tuned.

## Project Goals

The goal of this project is to better myself in regards to Docker and CodePipeline.

## Requirements

### Development

#### Without Docker

You'll need:
- NodeJS

#### With Docker

You'll need:
- Docker

### Deployment

You'll need the following:
- an AWS Account
- Docker installed

## Installation

@TODO

## To Run

### Development

Run `npm run start` to run the app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Docker

#### Build

First, you'll need to build the app

```console
-- These are variables I'll use -- You can use your own --
% export REPO_NAME="johnedquinn"
% export IMG_NAME="portfolio-website"
% export IMG_TAG="latest"
% export FULL_TAG="${REPO_NAME}/${IMG_NAME}:${IMG_TAG}"

-- Build --
% docker build . -t "${FULL_TAG}"
```

#### Run

If you look at the Dockerfile, we run the server on Port 80, so you'll need to map it to some open port.
```console
-- Again, you can specify whichever port you please --
% export OPEN_PORT="8050"

-- Start the Container --
% docker run -p "${OPEN_PORT}:80" -d "${FULL_TAG}"
```

You can see the Docker logs by:
```console
-- Get Container ID --
% docker ps

-- Print App Output --
% docker logs <container id>
```

To can access the website, in this instance, at http://localhost:8050.

## To Deploy

### Docker

```console
% docker build . -t <SOME_REPO>/<SOME_IMAGE_NAME>:<SOME_TAG>
```

## View the Product

The website (deployed with AWS Amplify) can be found at [https://www.johnedquinn.com](https://www.johnedquinn.com). Soon, this will change to utilize CodePipeline and ECS instead.

