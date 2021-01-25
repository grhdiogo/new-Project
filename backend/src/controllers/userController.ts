import {getRepository} from 'typeorm'
import User from '../models/User'
import Adress from '../models/Adress'
import {Request, Response} from 'express'
import * as Yup from 'yup'


export default{

    async save(req: Request, res: Response){
        const{
            name,
            lastName,
            birthday,
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
        const adress = new Adress
        
        user.name=name
        user.lastName=lastName
        user.birthday=birthday
        adress.country=country
        adress.state=state
        adress.city=city
        adress.zipCode=zipCode
        adress.zone=zone
        adress.street=street
        adress.number=number
        adress.complement=complement
        user.adress=adress

        const userRep = getRepository(User)
        
        
        await userRep.save(user)

        res.json("Usuário cadastrado")
        

        
        

        
    },//FUNCTION SAVE

    async searchAll(req: Request, res: Response){
        const userRep = getRepository(User)
        const users = await userRep.find({relations:["adress"]})
        res.json(users)
    },//FUNCTION SEARCHALL

    async searchOne(req: Request, res: Response){
        const {id} = req.params
        const userRep = getRepository(User)
        const users = await userRep.find({relations:["adress"],where:{id:id}})
        res.json(users)

    },//FUNCTION SEARCHONE

    async update(req: Request, res: Response){
        const userRep = getRepository(User)
        const adressRep = getRepository(Adress)
        const{
            idUser,
            idAdress,
            name,
            lastName,
            birthday,
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
        const adress = new Adress
        user.id=idUser
        user.name=name
        user.lastName=lastName
        user.birthday=birthday
        adress.id=idAdress
        adress.country=country
        adress.state=state
        adress.city=city
        adress.zipCode=zipCode
        adress.zone=zone
        adress.street=street
        adress.number=number
        adress.complement=complement




        userRep.update(user.id,user)
        adressRep.update(adress.id,adress)

        res.json("Usuário atualizado")
        
        
    },//FUNCTION UPDATE

    async delete(req: Request, res: Response){
        const userRep = getRepository(User)
        const adressRep = getRepository(Adress)
        const{
            idUser,
            idAdress,
        } = req.body
        
        userRep.delete(idUser)
        adressRep.delete(idAdress)

        res.json("Usuário e Endereço Deletados")

    }



}//END OF EXPORT