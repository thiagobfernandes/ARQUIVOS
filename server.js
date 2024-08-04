import express from 'express'
import {router} from './routes.js';

const server=express();

server.use('/',router);

server.listen(3333, () => console.log("aplicacao rodando na porta 8080"));
