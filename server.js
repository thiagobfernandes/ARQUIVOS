import { router} from './routes.js';
import express from 'express';

const server = express();
const port=3000

server.use(router);

server.listen(port, () => {
    console.log("server rodando na porta" + port);
})


