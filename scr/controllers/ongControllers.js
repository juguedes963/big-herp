const conexao=require('../database/conection')
const crypt = require('crypto')
module.exports={
    async index(request,response){
        const ongs=await conexao('ongs').select('*')
        return response.json(ongs)
    },
    async create(request,response){
        
            const { name, email, whats, city, uf } = request.body
            const id = crypt.randomBytes(4).toString('HEX')
            await conexao('ongs').insert({
                id,
                name,
                email,
                whats,
                city,
                uf,
            })
            return response.json(
              {
                id
              }        
            )
            }
}