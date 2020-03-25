const conexao = require('../database/conection')
module.exports = {
    async create(request, response) {
        const { id } = request.body
        const ong = await conexao('ongs').where('id', id).select('name').first()
        if (!ong) {
            return response.status(400).json({error:"no found ong"})

        }
        return response.json(ong)
    }
}