const DealModel = require('../models/deals')();

module.exports = {

    async createDeal(orders) {
        //console.log('service createDeals', orders)
        const insertDeal = await orders.map(async (order) => {
            await DealModel.create(order)
        }
        )
        return insertDeal
    },

    async aggregateOportunities() {
        const orders = await DealModel.aggregate([
            { $match: {} },
            {
                $project: {
                    numero: '$numero',
                    idPedido: "$idPedido",
                    valueOrder: "$valueOrder",
                    organizationName: "$organizationName",
                    date: { $dateToString: { format: '%d/%m/%Y', date: "$wonTime" } },
                }
            },
            { $group: { _id: "$date", total: { $sum: "$valueOrder" } } }
        ])

        return orders
    },


    async consolidado() {

    }
}


