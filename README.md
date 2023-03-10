# Realtime Chat Demo (Sockets.io/Auth0)

## Introduction

This project is a chat component that utilizes the power of Sockets.io and Auth0 to provide secure and real-time messaging. Right now it operates more of a chatroom as this was meant to be a learning experience but I may end up adding some way of connecting with random users or have some private message style.

## Features
- Real-time chat component using Auth0 for authentication

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

Personally, I setup a custom script in `package.json` that runs both using Concurrently. This is what that looks like when you run  `npm run dev`:

```JSON
"dev": "concurrently \"node .\\pages\\api\\chat-socket.js\" \"next dev\""
```

## Conclusion

In conclusion, I'm pretty impressed with both Auth0 and Sockets.io. There are still some features that I'd like to add in the future, such as a language/profanity filter and some customizable options within a config file.

Overall, as this was a learning experience to learn Auth0 and Websockets, I am happy with how this came out and will continue to add upon it.


