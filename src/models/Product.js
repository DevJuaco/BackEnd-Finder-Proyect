const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

const ProductModel = model(
    'Product',
    ProductSchema
)

module.exports = ProductModel