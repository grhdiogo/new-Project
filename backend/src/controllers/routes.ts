import {Router} from 'express'
import userController from './userController'
import productController from './productController'
import orderController from './orderController'


const routes =  Router()


routes.post('/createUser',userController.save)
routes.post('/usersList',userController.searchAll)
routes.get('/user/:id',userController.searchOne)
routes.post('/updateUser',userController.update)
routes.post('/deleteUser',userController.delete)

routes.post('/createProduct',productController.save)
routes.post('/productsList',productController.searchAll)
routes.get('/product/:id',productController.searchOne)
routes.post('/updateProduct',productController.update)
routes.post('/deleteProduct',productController.delete)

routes.post('/createOrder',orderController.save)



export default routes