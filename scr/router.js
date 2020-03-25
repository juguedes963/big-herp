const express = require('express')
const controllerOng =require('./controllers/ongControllers')
const controllercasos =require('./controllers/casosControllers')
const controllersession =require('./controllers/sessionControllers')
const controllerProfile =require('./controllers/ProfileControllers')
const routes = express.Router()

routes.post('/sessao',controllersession.create)
 
routes.post('/ongs',controllerOng.create)
routes.get('/ongs',controllerOng.index)

routes.post('/casos',controllercasos.createCase)
routes.get('/casos',controllercasos.index)
routes.delete('casos/:id',controllercasos.delete)

routes.get('/profile',controllerProfile.index)
module.exports = routes