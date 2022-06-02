const Ajv = require('ajv')
const ajv = new Ajv()
const addFormats = require("ajv-formats")
const usuarioSchema = require('../schemas/usuario.schema')

addFormats(ajv)

function validarUsuario(req, res, next){
    const user = req.body
    const validate = ajv.compile(usuarioSchema)
    const valid = validate(user)
    if (valid){
        next()
    }else{
        res.status(400).json({msg: "Dados inválidos", erros: validate.errors})
    }
}

module.exports = validarUsuario