const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

const postagens = {}

//TODOS OS POSTAGENS
router.get('/', (req, res) => {
     res.json({postagens: Object.values(postagens)})
 })
 

 //CRIANDO NOVA POSTAGEM
router.post('/', (req, res) => {
    const post  = req.body
    console.log(post)
    const idpost = uuidv4()
    post.id = idpost
    postagens[idpost] = post
    console.log(postagens)
    res.json({msg: "Postagem adicionado com sucesso!"})
})

//ATUALIZANDO UMA POSTAGEM
router.put('/', (req, res) => {
     const id = req.query.id
     if (id && postagens[id]){
         const post = req.body
         post.id = id
         postagens[id] = post
         res.json({msg: "Postagem atualizado com sucesso!"})
     }else{
         res.status(400).json({msg: "Postagem não encontrado!"})
     }
 
 })
 
 //DELETANDO POSTAGEM
 router.delete('/', (req, res) => {
     const id = req.query.id
     if (id && postagens[id]){
         delete postagens[id]
         res.json({msg: "Postagem deletado com sucesso!"})
     }else{
         res.status(400).json({msg: "Postagem não encontrado!"})
     }
 })

 //CAPTURANDO USUARIO ESPECIFICO
 router.get('/:id', (req, res) => {
     res.json({user: postagens[req.params.id]})
 })




module.exports = router