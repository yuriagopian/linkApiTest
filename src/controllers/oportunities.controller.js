const { apiPipedrive } = require('../services/api');
const createOrders = require('../services/createOrder');
const dealService = require('../services/deal.service');

module.exports = {
    async createOportunities(req, res) {
        try {
            const path = '/deals?status=won&start=0&api_token='
            const dealsWithStatusWon = await apiPipedrive.get(
                `${path}${process.env.API_TOKEN_PIPEDRIVE}`
            )

            const deals = dealsWithStatusWon.data.data;

            // transformar oportunidades em xml 
            const orders = await createOrders.generate(deals)

            let insertedItems = await removeItemsWithError(orders, 30)

            if (insertedItems.length != 0) {
                // insere no banco de dados
                await dealService.createDeal(orders)

            }

            res.status(201).json(orders)

        } catch (error) {
            res.status(500).json(error)

        }


    },

    async listOportunities(req, res) {
        try {
            const aggregation = await dealService.aggregateOportunities()
            res.status(200).send(aggregation);

        } catch (error) {
            res.status(500).send(error.stack)
        }
    }
}


function removeItemsWithError(orders, errorCode) {
    return orders.filter(element => {
        element.cod != errorCode
    })
}