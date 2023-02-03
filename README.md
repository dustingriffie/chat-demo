# Ticket Dispatch System

## Introduction

Welcome to the Ticket Dispatch System! This project is a web-based platform for dispatching tickets and technicians. Users can create tickets and assign them to technicians, and technicians can access and dispatch tickets from their easily accessible Google Maps window.

## Features
- Create tickets
- Assign tickets to technicians
- View dispatched tickets on Google Maps
- Easily accessible interface for technicians

## Technologies
- React
- Next.js
- Firebase
- Firestore
- Firebase Admin

## Prerequisites
- Google API Key
- Firebase API Key
- 'tickets' collection in Firestore
- 'dispatch_events' collection in Firestore
- Currently no method of user management so user custom claims (ex. admin (dispatch) and technician) will need to be set through the API. This will change as project gets further updates.

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

Personally, I setup a customer command in `package.json` that runs both using Concurrently. To do this:

First, install Cocurrently:
```
npm install concurrently
```
Next, add this command to your `scripts` section in `package.json`:
```JSON
"dev": "concurrently \"node .\\pages\\api\\chat-socket.js\" \"next dev\""
```

By running these two commands, the chat component and server will both be started, allowing you to start using the chat component.



