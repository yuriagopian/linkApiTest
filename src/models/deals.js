const mongoose = require('../database/connection');
const mongoosePaginate = require('mongoose-paginate')

module.exports = function () {
    const DealsSchema = new mongoose.Schema(
        {
            idOrder: {
                type: Number,
                required: true
            },
            organizationName: {
                type: String,
                required: true
            },
            
            valueOrder: {
                type: Number,
                required:true
            },
            dateCriation: {
                type: Date,
                required:true
            },            
        }
    )

    DealsSchema.plugin(mongoosePaginate)

    DealsSchema.statics.save = function (obj) {
    let schema = new schemaModel()
    for (var _prop in obj) {
      schema[_prop] = obj[_prop]
    }
    return schema.save()
  }


  let schemaModel = mongoose.model('deals_model', DealsSchema)

  return schemaModel
}