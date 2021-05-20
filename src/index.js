import express from 'express';
import router from './routes/router';

const server = express();

server.use(express.json());

server.use(router);

server.listen((3000), () => {
    console.log("Server listening on PORT: 3000")
})