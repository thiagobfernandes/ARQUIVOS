import { Router } from "express";
import { receberip } from "./service.js";
import { error } from "console";
import fs from "fs"
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url)); // importando e configurando o dirname

const router= Router();

router.get('/', async (req,res) => {
  const pastaDestino = path.join(__dirname, 'ips')

  try {
    fs.accessSync(pastaDestino, fs.constants.W_OK);
    console.log('Permissão de escrita verificada');
} catch (err) {
    console.error('Sem permissão de escrita para a pasta:', pastaDestino, err);
    res.status(500).json({ error: "Sem permissão de escrita" });
    return;
}



try{
      const dados = await receberip();
      
      if(!fs.existsSync(pastaDestino)) {
        fs.mkdirSync(pastaDestino, {recursive:true})

      }
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filePath = path.join(pastaDestino, `ip_info_${timestamp}.json`); // na parte do replae estou falando, olha quando for criar a string na coloque dois pontos substitua por -
      fs.writeFileSync(filePath, JSON.stringify(dados, null, 2), 'utf-8');
      res.status(200).json("")
  } catch(err){
      res.status(500).json({
        error:"internal server error"
      });
  }

});

export {router}