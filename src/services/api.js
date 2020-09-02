const axios = require('axios');
require('dotenv').config();

const baseUrlPipedrive = process.env.BASE_URL_PIPEDRIVE
const baseUrlBling = process.env.BASE_URL_BLING

const apiPipedrive = axios.create({
    baseURL: baseUrlPipedrive,
    timeout: 1000,
});

const apiBling = axios.create({
    baseURL: baseUrlBling,
    timeout: 1000,
});


module.exports = { apiPipedrive, apiBling } 