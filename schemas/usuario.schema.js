module.exports = {
     type: "object",
     properties: {
         nome: {type: "string"},
         telefone: {type: "string"},
         email: {type: "string", format: "email"},
         senha: {type: "string"}
     },
     required: ["email", "senha","nome"],
     additionalProperties: false
 }