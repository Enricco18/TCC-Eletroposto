import express from 'express';
// import router from './routes/router';
import * as WebSocket from 'ws';
import http from 'http';

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({server})

wss.on('connection', (ws) => {

    console.log("conectado")
    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {

        //log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    });

    //send immediatly a feedback to the incoming connection    
    ws.send('Hi there, I am a WebSocket server');
});



server.listen((3000), () => {
    console.log("Server listening on PORT: 3000")
})