import { rejects } from "assert";
import request from "request";
 export const receberip = () => {
      return new Promise((resolve, rejects) => {
            let url = `http://ip-api.com/json`
            let dados = '';
             
            request(url, (err, response, body, res) => {
                  
               if(err){
                    console.log('error:',  err);
                    rejects(err)
               } else {
                   let ipInfo = JSON.parse(body);
                   dados = {
                        IP:ipInfo.query,
                        País:ipInfo.country,
                            Cidade:ipInfo.city,
                            Região:ipInfo.regionName,
                            Lat:ipInfo.lat,
                            Lon:ipInfo.lon,
                            Organização:ipInfo.org,
                   }
                           
                   resolve(dados);
                  
             }
            }); 



      })



 }
