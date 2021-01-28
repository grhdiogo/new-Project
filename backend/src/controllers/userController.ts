import {getRepository} from 'typeorm'
import User from '../models/User'
import Cep from '../models/Cep'
import {Request, Response} from 'express'
import * as Yup from 'yup'


export default{

    async save(req: Request, res: Response){
        const{
            username,
            password,
            name,
            lastName,
            birthday,
            nfe,
            telephone,
            telephone2,
            country,
            state,
            city,
            zipCode,
            zone,
            street,
            number,
            complement,
            cepID
        } = req.body
        
        const user = new User
        const cep = new Cep
        
        user.username=username
        user.password=password
        user.name=name
        user.lastName=lastName
        user.birthday=birthday
        user.nfe=nfe
        user.telephone=telephone
        user.telephone2=telephone2
        cep.country=country
        cep.state=state
        cep.city=city
        cep.zipCode=zipCode
        cep.zone=zone
        cep.street=street
        user.number=number
        user.complement=complement
        user.cep=cep
        

        const userRep = getRepository(User)
        
        
        await userRep.save(user)

        res.json("Usuário cadastrado")
        

        
        

        
    },//FUNCTION SAVE

    async searchAll(req: Request, res: Response){
        const userRep = getRepository(User)
        const users = await userRep.find()
        res.json(users)
    },//FUNCTION SEARCHALL

    async searchOne(req: Request, res: Response){
        const {id} = req.params
        const userRep = getRepository(User)
        const users = await userRep.find({where:{id:id}})
        res.json(users)

    },//FUNCTION SEARCHONE

    async update(req: Request, res: Response){
        const userRep = getRepository(User)
        const{
            id,
            username,
            password,
            name,
            lastName,
            birthday,
            nfe,
            telephone,
            telephone2,
            country,
            state,
            city,
            zipCode,
            zone,
            street,
            number,
            complement
        } = req.body
        
        const user = new User
        const cep = new Cep
        
        user.id=id
        user.username=username
        user.password=password
        user.name=name
        user.lastName=lastName
        user.birthday=birthday
        user.nfe=nfe
        user.telephone=telephone
        user.telephone2=telephone2
        cep.country=country
        cep.state=state
        cep.city=city
        cep.zipCode=zipCode
        cep.zone=zone
        cep.street=street
        user.number=number
        user.complement=complement
        user.cep=cep




        userRep.update(user.id,user)

        res.json("Usuário atualizado")
        
        
    },//FUNCTION UPDATE

    async delete(req: Request, res: Response){
        const userRep = getRepository(User)
        const{
            id,
        } = req.body
        
        userRep.delete(id)

        res.json("Usuário Deletado")

    }



}//END OF EXPORT