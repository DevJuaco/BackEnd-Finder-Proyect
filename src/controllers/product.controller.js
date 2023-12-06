const { response } = require('express')
const { getAllProducts, createProduct, getOneProduct, updateOneProduct, deleteOneProduct } = require('../services/product.service')

async function deleteOne (req, res) {
    const deleteById = req.params.id
    try {
        const deleteProduct = await deleteOneProduct(deleteById)
        res.json({
            ok: true,
            deleteProduct
        })
    } catch (error) {
        console.error(error)
        res({
            ok: false,
            msg: "ha ocurrido un error al actualizar el producto"
        })
    }
}

async function updateOne (req, res) {
    const updateById = req.params.id
    const inputData = req.body

    try {
        const updateProduct = await updateOneProduct(updateById, inputData)
        res.json({
            ok: true,
            updateProduct
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'ha ocurrido un error al actualizar el producto'
        })
    }
}

async function getOne (req, res) {
    const productById = req.params.id

    try {
        const getProduct = await getOneProduct(productById)
        res.json({
            ok: true,
            getProduct
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'ha ocurrido un error al obtener el producto'
        })
    }
}

async function create (req, res) {
    const inputData = req.body
    const payload = req.authUser

    if (inputData?.category.length == 0) {
        delete inputData.category
    }

    inputData.storeId = payload._id
    
    try {
        const newProduct = createProduct(inputData)
        res.json({
            ok: true,
            newProduct
        })
    } catch (error) {
        res.json({
            ok: false,
            msg: 'error al crear un producto'
        })
    }
}

async function getAll (req, res) {
    try {
        const allProducts = await getAllProducts()
        res.json({
            ok: true,
            allProducts
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al obtener todos los productos'
        })
    }
}

module.exports = {
    getAll,
    create,
    getOne,
    updateOne,
    deleteOne
}