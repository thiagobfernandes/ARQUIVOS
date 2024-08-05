import { Router } from "express";
import { receberip } from "./service.js";
import { error } from "console";
import fs from "fs"
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url)); // importando e configurando o dirname

const router= Router();

router.get('/receberip', async (req,res) => {
try{
    const dados = await receberip();
    const pastaDestino = path.join(__dirname, 'ips')
    if(!fs.existsSync(pastaDestino)) {
      fs.mkdirSync(pastaDestino, {recursive:true})

    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filePath = path.join(pastaDestino, `ip_info_${timestamp}.json`); // na parte do replae estou falando, olha quando for criar a string na coloque dois pontos substitua por -
    fs.writeFileSync(filePath, JSON.stringify(dados, null, 2), 'utf-8');
    res.json('');
} catch(err){
    res.status(500).json({
      error:"internal server error"
    });
}

});

export {router}