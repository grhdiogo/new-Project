import {Router} from 'express'
import loginController from './loginController'
import userController from './userController'


const routes =  Router()

routes.post('/login',loginController.login)
routes.post('/createUser',userController.save)
routes.post('/usersList',userController.searchAll)
routes.get('/user/:id',userController.searchOne)
routes.post('/updateUser',userController.update)
routes.post('/deleteUser',userController.delete)

export default routes