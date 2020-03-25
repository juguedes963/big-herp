const conexao=require('../database/conection')
const crypt = require('crypto')
module.exports={
    async index(request,response){
        const ongs=await conexao('ongs').select('*')
        return response.json(ongs)
    },
    async create(request,response){
        
            const { name, email, whatsapp, city, uf } = request.body
            const id = crypt.randomBytes(4).toString('HEX')
            await conexao('ongs').insert({
                id,
                name,
                email,
                whatsapp,
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