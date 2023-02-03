# Ticket Dispatch System

## Introduction

This project is a chat component that utilizes the power of Sockets.io and Auth0 to provide secure and real-time messaging.

## Features
- Real-time chat component using Auth0 as authentication

## Technologies
- React
- Next.js
- Auth0
- Sockets.io

## Prerequisites
- Auth0 Account Setup + API Details

## Getting Started

1. Clone the repository
```
$ git clone https://github.com/dustingriffie/chat-demo.git
```
2. Install dependencies
```
$ npm install
```
3. Create a `.env.local` file in the root directory
```
$ touch .env.local
```
4. Add the following environment variables to your .env.local file, using your own Auth0 API information:
```Javascript
AUTH0_SECRET=XXX
AUTH0_BASE_URL=XXX
AUTH0_ISSUER_BASE_URL=XXX
AUTH0_CLIENT_ID=XXX
AUTH0_CLIENT_SECRET=XXX
```
### Running the Chat Component

To run the chat component, you will need to run the following command in the terminal in the project folder:

```
npm run dev
```
AND
```
node .\pages\api\chat-socket.js
```

Personally, I setup a custom script in `package.json` that runs both using Concurrently. To do this:

1. Install Cocurrently:
```
npm install concurrently
```
1. Add this command to your `scripts` section in `package.json`:
```JSON
"dev": "concurrently \"node .\\pages\\api\\chat-socket.js\" \"next dev\""
```

By running these two commands, the chat component and server will both be started, allowing you to start using the chat component.



