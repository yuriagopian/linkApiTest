const { apiPipedrive, apiBling } = require('../services/api');
const createOrders = require('../services/createOrder');
const dealService = require('../services/deal.service');

module.exports = {
    async listOportunities(req, res) {
        try {
            const dealsWithStatusWon = await apiPipedrive.get(
                `/deals?status=won&start=0&api_token=${process.env.API_TOKEN_PIPEDRIVE}`
            )
            const deals = dealsWithStatusWon.data.data;
            // transformar oportunidades em xml 
            const orders = await createOrders.generate(deals)
            await dealService.createDeal(orders)

            res.send(orders)

        } catch (error) {
            res.send('erro')

        }
    }
}