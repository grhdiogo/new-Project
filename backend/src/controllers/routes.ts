import {Router} from 'express'
import userController from './userController'
import productController from './productController'
import orderController from './orderController'
import cepController from './cepController'
import loginController from './loginController'


const routes =  Router()


routes.post('/createClient',userController.save)
routes.get('/clientsList',userController.searchAll)
routes.get('/client/:id',userController.searchOne)
routes.post('/updateClient',userController.update)
routes.post('/deleteClient',userController.delete)

routes.post('/createProduct',productController.save)
routes.get('/productsList',productController.searchAll)
routes.get('/product/:id',productController.searchOne)
routes.post('/updateProduct',productController.update)
routes.post('/deleteProduct',productController.delete)

routes.post('/createOrder',orderController.save)
routes.get('/ordersList',orderController.searchAll)

routes.post('/createCep',cepController.save)
routes.get('/cepsList',cepController.searchAll)
routes.get('/cep/:id',cepController.searchOne)
routes.post('/updateCep',cepController.update)

routes.post('/login',loginController.login)
routes.get('/isLogged',loginController.isLogged)
routes.get('/logout',loginController.logout)





export default routes