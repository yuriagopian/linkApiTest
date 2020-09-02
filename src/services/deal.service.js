const DealModel = require('../models/deals');

module.exports = {

    async createDeal(orders) {
        const insertDeal = await orders.map({
            async createDeal(order) {
                await DealModel.create(order)
            }
        })
        return insertDeal
    }
}