const mongoose = require('../database/connection');
const mongoosePaginate = require('mongoose-paginate')

module.exports = function () {
    const DealsSchema = new mongoose.Schema(
        {
            numero: {
                type: Number,
                required: true,
                unique: true
            },
            idPedido: {
                type: Number,
                required: true
            },
            organizationName: {
                type: String,
                required: true
            },

            valueOrder: {
                type: Number,
                required: true
            },
            wonTime: {
                type: Date,
                required: true
            },
        }
    )

    DealsSchema.plugin(mongoosePaginate)

    let schemaModel = mongoose.model('deals_model', DealsSchema)

    return schemaModel
}