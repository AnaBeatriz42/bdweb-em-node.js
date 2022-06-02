const express = require('express')
const router = express.Router()
const userMid = require('../middleware/validarUsuario')

const { Usuario } = require('../models')

router.post('/', userMid)
router.put('/', userMid)

//TODOS OS USUARIOS
router.get('/', async (req, res) => {
    const user = await Usuario.findAll()
    res.json({Usuarios: user})
})


//CRIANDO USUARIO
router.post('/', async (req, res) => {
    const user = await Usuario.create(req.body)
    res.json({msg: "Usuario adicionado com sucesso!"})
})

//ATUALIZANDO USUARIO
router.put('/', async(req, res) => {
    const id = req.query.id
    const user = await Usuario.findByPk(id)
    if (user){
        user.nome = req.body.nome
        user.email = req.body.email
        user.senha = req.body.senha
        user.telefone = req.body.telefone
        await user.save()
        res.json({msg: "Usuario atualizado com sucesso!"})
    }else{
        res.status(400).json({msg: "Usuario não encontrado!"})
    }
})

//DELETANDO USUARIO 
router.delete('/', async (req, res) => {
    const id = req.query.id
    const user = await Usuario.findByPk(id)
    if (user){
        await user.destroy()
        res.json({msg: "Usuario deletado com sucesso!"})
    }else{
        res.status(400).json({msg: "Usuario não encontrado!"})
    }
})

//CAPTURANDO USUARIO ESPECIFICO
router.get('/:id', async(req, res) => {
    const user = await Usuario.findByPk(req.params.id)
    if(user){
        res.json({Usuario: user})
    }else{
        res.status(400).json({msg: "Usuario não encontrado!"})
    }
    
})

module.exports = router