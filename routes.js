import { Router } from "express";
import { receberip } from "./service.js";
import { error } from "console";
import fs from "fs"


const router= Router();

router.get('/receberip', async (req,res) => {
try{
    const dados = await receberip();
    fs.writeFileSync(`ip_infoR.json`, JSON.stringify(dados, null, 2), 'utf-8');
    res.json('');
} catch(err){
    res.status(500).json({
      error:"internal server error"
    });
}

});

export {router}