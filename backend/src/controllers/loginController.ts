import {getRepository} from 'typeorm'
import Login from '../models/Login'
import {Request, Response} from 'express'


export default{

   async login(req: Request, res: Response){
    const{
        user,
        pass
    } = req.body
    
    const loginRep = getRepository(Login)
 
    const login = await loginRep.find({where: {user:user,pass:pass} })

    if(login.length==1){
       res.send(true)
    }else{
    res.send(false)
    }
   }






}