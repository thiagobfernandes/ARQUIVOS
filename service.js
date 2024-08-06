import axios from 'axios'; // aqui estou importando a biblioteca

export const receberip = () => {
    return new Promise((resolve, reject) => {
        let url = 'http://ip-api.com/json'; // aqui estou recendo uma api

        axios.get(url) // qaqui estou utilizando o axios
            .then(response => { // se tiver uma resposta
                const ipInfo = response.data;
                const dados = {
                    IP: ipInfo.query,
                    País: ipInfo.country,
                    Cidade: ipInfo.city,
                    Região: ipInfo.regionName,
                    Lat: ipInfo.lat,
                    Lon: ipInfo.lon,
                    Organização: ipInfo.org,
                };
                resolve(dados);
            })
            .catch(error => {
                console.log('error:', error);
                reject(error);
            });
    });
};