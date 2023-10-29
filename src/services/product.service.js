const ProductModel = require('../models/Product')

async function deleteOneProduct(id) {
    return await ProductModel.findOneAndRemove({_id: id})
}

async function updateOneProduct(id, updateProduct) {
    return await ProductModel.findOneAndUpdate(
        {_id: id},
        updateProduct,
        {new: true}
    )
}

async function getOneProduct(id) {
    return await ProductModel.findById(id)
}

async function getAllProducts() {
    return await ProductModel.find()
}

async function createProduct(product) {
    return await ProductModel.create(product)
}

module.exports = {
    getAllProducts,
    createProduct,
    getOneProduct,
    updateOneProduct,
    deleteOneProduct
}