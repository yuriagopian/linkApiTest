const DealModel = require('../models/deals')();

module.exports = {

    async createDeal(orders) {
        const insertDeal = await orders.map(async (order) => {
            console.log("teste fudidao", order)
            await DealModel.create(order)
        }
        )
    }
}


