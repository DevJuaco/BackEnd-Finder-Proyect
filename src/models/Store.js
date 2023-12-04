const {Schema, model} = require('mongoose')

const StoreSchema = new Schema({
    storeName: {
        type: String,
        require: true
    },
    nit: Number,
    urlLogo: String,
    mail: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
},{
    timestamps: true
})

const StoreModel = model('Store', StoreSchema)
module.exports = StoreModel