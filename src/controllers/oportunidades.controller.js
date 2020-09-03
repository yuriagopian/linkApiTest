const { apiPipedrive, apiBling } = require('../services/api');
const createOrders = require('../services/createOrder');
const dealService = require('../services/deal.service');

module.exports = {
    async createOportunities(req, res) {
        try {
            const dealsWithStatusWon = await apiPipedrive.get(
                `/deals?status=won&start=0&api_token=${process.env.API_TOKEN_PIPEDRIVE}`
            )
            const deals = dealsWithStatusWon.data.data;
            // console.log('pega deals do pipedrive deals', deals)

            // transformar oportunidades em xml 
            const orders = await createOrders.generate(deals)
            console.log(orders)

            // insere no banco de dados
            await dealService.createDeal(orders)

            //const aggregation = await dealService.aggregateOportunities()
            // console.log('orders gerados no bling', orders)
            //console.log(aggregation)
            res.send(orders)

        } catch (error) {
            res.send(error)

        }

    },

    async listOportunities(req, res) {
        try {

            const aggregation = await dealService.aggregateOportunities()
            res.send(aggregation);

        } catch (error) {
            res.send(error.stack)
        }
    }
}