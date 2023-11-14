const {Schema, model} = require('mongoose')

const StoresSchema = new Schema({
    storeName: {
        type: String,
        require: true 
    },
    address: {
        type: String,
        require: true
    },
    urlLogo: {
        type: String,
    }
}, {
    timestamps: true
})

const StoreModel = model(
    'Store',
    StoresSchema
)

module.exports = StoreModel