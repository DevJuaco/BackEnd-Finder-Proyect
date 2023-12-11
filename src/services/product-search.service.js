const ProductModel = require('../models/Product')
const StoreModel = require('../models/Store')

// async function searchProductByName (name) {
//     return await ProductModel.find({
//         name: {$regex: new RegExp(name, 'i')}
//     })
// }

async function searchProductByName (productName) {
    try {
        const products = await ProductModel.find({name: { $regex: new RegExp(productName, 'i') }})
        console.log(products)

        const storesAndProducts = await Promise.all(
            products.map(async (product) => {
                return store = await StoreModel.findById(product.storeId)
            })
        )
        return storesAndProducts
    } catch (error) {
        console.error('Error al buscar productos y tiendas:', error);
        throw new Error('Error al buscar productos y tiendas en la base de datos');
    }

}

module.exports = {
    searchProductByName
}