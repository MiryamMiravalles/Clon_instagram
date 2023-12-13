import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import routes from './routes/index.js';
import { notFoundController, errorController } from './middlewares/index.js';

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(cors());

// middleware de rutas
server.use(routes);

// middleware de ruta no encontrada
server.use(notFoundController);

// middleware de manejo de errores
server.use(errorController);


export default server;
