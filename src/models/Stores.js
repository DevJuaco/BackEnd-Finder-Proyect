const {Schema, model} = require('mongoose')

const StoresSchema = new Schema({
    storeId: {
        type: String
        
    }
})

const counterSchema = new Schema({
    id: {
        type: String
    },
    seq: {
        type: Number
    }
})

const StoreModel = model(
    'Store',
    StoresSchema
)

module.exports = StoreModel