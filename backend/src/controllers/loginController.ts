import {Request, Response} from 'express'
import session from 'express-session'
import {getRepository} from 'typeorm'
import Client from '../models/Client'


export default {

    async login(req: Request, res: Response){
        const {user,pass}=req.body
        const sess = req.session

        const loginRep = getRepository(Client)
        const clientLogin = await loginRep.findOne({where:{username:user,password:pass}})
        

       if(clientLogin){
           sess.client=clientLogin
           sess.loggedIn=true
           res.send(sess.loggedIn)
       }else{
           sess.loggedIn=false
           res.send(sess.loggedIn)
       }
       
      
    },

    async isLogged(req: Request, res: Response){
        const sess = req.session
        if(sess.loggedIn==true){
            res.send(true)
        }else{
            res.send(false)
        }

    },

    async logout(req: Request, res: Response){
        const sess = req.session
        sess.destroy((err)=>{

        })
        res.send('Deslogado')

    },

    


}