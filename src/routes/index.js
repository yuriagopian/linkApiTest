const express = require('express');
const router = express.Router();

const oportunitiesController = require('../controllers/oportunities.controller')

router.get('/', (req, res) => {
  res.send('Me contrata linkapi !!!')
})

router.post('/oportunities', oportunitiesController.createOportunities);
/**
* @api {post} http://localhost:3000/oportunities  Inserting oportunities
* @apiDescription lista todos os pedidos com oportunidade Won e os insere no bling como pedidod de venda 
*
* @apiGroup Oportunities

* @apiSuccessExample {json} Success-Response:
[
  [
  {
    "numero": "99",
    "idPedido": 9392027746,
    "valueOrder": 100,
    "organizationName": "Linkapi",
    "wonTime": "2020-09-01 19:24:47"
  },
  {
    "numero": "98",
    "idPedido": 9392027743,
    "valueOrder": 100,
    "organizationName": "Linkapi",
    "wonTime": "2020-09-01 19:26:53"
  },
  {
    "numero": "96",
    "idPedido": 9392027737,
    "valueOrder": 80,
    "organizationName": "teste",
    "wonTime": "2020-09-03 00:13:06"
  },
  {
    "numero": "97",
    "idPedido": 9392027740,
    "valueOrder": 1000,
    "organizationName": "teste",
    "wonTime": "2020-09-03 00:48:17"
  },
  {
    "numero": "100",
    "idPedido": 9392027749,
    "valueOrder": 2000,
    "organizationName": "teste",
    "wonTime": "2020-09-03 01:28:29"
  },
  {
    "numero": "95",
    "idPedido": 9392027734,
    "valueOrder": 2000,
    "organizationName": "teste",
    "wonTime": "2020-09-03 01:48:21"
  }
]}
]

 * @apiSuccess               {string}        numero                Numero do pedido.
 * @apiSuccess               {number}        idPedido              Id do pedido.
 * @apiSuccess               {number}        valueOrder            Valor totaL do pedido.
 * @apiSuccess               {string}        organizationName      Nome da empresa.
 * @apiSuccess               {string}        wonTime               Data na qual o status foi alterado par won.
 *
 * @apiErrorExample {json} Error-Response: 400
  * HTTP/1.1 400 OK
 {
  "message": "Bad Request!"
}

*/



router.get('/oportunities', oportunitiesController.listOportunities);

/**
* @api {get} http://localhost:3000/oportunities  Lista oportunidades
* @apiDescription lista o agregado de oportunidades por dia.
*
* @apiGroup Oportunities

* @apiSuccessExample {json} Success-Response:
[
  {
    "data": "01/09/2020",
    "valorTotal": 200,
    "qtde": 2
  },
  {
    "data": "03/09/2020",
    "valorTotal": 5080,
    "qtde": 4
  }
]

 * @apiSuccess               {string}        data         Data de inserção do pedido no pipedrive
 * @apiSuccess               {number}        valorTotal   Valor total de oportunidades com status Won inseridas no bling
 * @apiSuccess               {numer}         qtde         Quantidade total de oportunidades com status Won inseridas no bling       
 *
 * @apiErrorExample {json} Error-Response: 400
  * HTTP/1.1 400 OK
 {
  "message": "Bad Request!"
}

*/

module.exports = router;