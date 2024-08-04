import { Router } from 'express';
import { receberip } from './service.js';

const router = Router();

router.get('/receberip', async (req, res) => {
    try {
        const dados = await receberip();
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter IP' });
    }
});

export { router };
