import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import routes from './routes/index.js';

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

//middlewares de rutas
server.use(routes);

server.use((req,res) => {
    res.status(404).send({
        status: 'Error!',
        message: 'Recurso no encontrado'
    })
});

server.use((err,req,res,next) => {
    res.status(err.httpStatus || 500).send({
        status: 'Error',
        message: err.message
    });
});

export default server;
