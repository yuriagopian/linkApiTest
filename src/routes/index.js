const express = require('express');
const router = express.Router();

const oportunitiesController = require('../controllers/oportunidades.controller');


router.get('/', (req, res) => {
    res.send('Me contrata linkapi !!!')
})

router.get('/oportunities', oportunitiesController.listOportunities);

module.exports = router;