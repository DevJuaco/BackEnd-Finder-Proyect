const { compareSync } = require('bcrypt')
const StoreModel = require('../models/Store')
const { findStoreByStorename, registerStore, getOneStoreById } = require('../services/auth-cms.service')
const { generateToken } = require('../helpers/jwt.helper')

const register = async(req, res) => {
    const {storeName} = req.body
    const storeFound = await findStoreByStorename(storeName)

    if(storeFound) {
        return res.status(200).json({
            ok: false,
            msg: 'La tineda ya se encuentra registrada'
        })
    }

    registerStore(req.body)
    res.status(200).json({
        ok: true,
        msg: 'Registro exitoso'
    })
}

const login = async(req, res) => {
    const {mail, password} = req.body

    const storeFound = await findStoreByStorename(mail)

    if(!storeFound) {
        return res.status(400).json({
            ok: false,
            msg: 'El usuario no existe, por favor registrese'
        })
    }
    const validPassword = compareSync (password, storeFound.password)
        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña invalida, intente nuevamente',
            })
        }
    
    const storeData = storeFound.toObject()
    delete storeData.password
    
    const payload = {...storeData},
        token = generateToken(payload)

        res.status(200).json({
            ok: true,
            token,
            storeId: storeData._id
        })
}

const getStoreById = async (req, res) => {
    const store_id = req.params.id

    try {
        const storeData = await getOneStoreById(store_id)
        res.status(200).json({
            ok: true,
            storeData
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener la tienda por id'
        })
    }
}

const renewToken = (req, res) => {
    const storeData = req.authStore
    const {id} = storeData

    delete storeData.iat
    delete storeData.exp

    const storeFound = StoreModel.findById(id)
        if(!storeFound) {
            res.status(400).json({
                ok: false,
                msg: 'El usuario no existe, token no renovado'
            })
        }
    
    const newToken = generateToken ({...storeData})
        res.status(200).json({
            ok: true,
            token: newToken,
            storeData
        })
}

module.exports = {
    login,
    register,
    renewToken,
    getStoreById
}