const conexao=require('../database/conection')
module.exports={
    async index (request,response){
        const ong_id=request.headers.authorization
        const caso=await conexao('casos').where('ong_id',ong_id).select('*')
        return response.json(caso)
    }
}