const { searchProductByName } = require ('../services/product-search.service')

// async function searchProduct (req, res) {
//     const name = req.query.name
//     console.log('busca productos dentro de cada tienda')
//     try {
//         const result = await searchProductByName(name)

//         res.json({
//             ok: true,
//             result
//         })
//     } catch (error) {
//         console.error(error)
//         res.json({
//             ok: false,
//             msg: 'ha ocurrido un error al buscar el producto'
//         })
//     }
// }

async function searchProduct (req, res) {
    const nameProduct = req.params.term
    console.log(nameProduct)
    console.log('busca productos dentro de cada tienda')
    try {
        const result = await searchProductByName(nameProduct)

        res.json({
            ok: true,
            result
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'ha ocurrido un error al buscar el producto'
        })
    }
}

module.exports = {
    searchProduct
}