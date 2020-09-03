const axios = require('axios');
require('dotenv').config();

const baseUrlPipedrive = process.env.BASE_URL_PIPEDRIVE
const baseUrlBling = process.env.BASE_URL_BLING

const apiPipedrive = axios.create({
    baseURL: baseUrlPipedrive,
    timeout: 5000,
});

const apiBling = axios.create({
    baseURL: baseUrlBling,
    timeout: 5000,
});


module.exports = { apiPipedrive, apiBling } 