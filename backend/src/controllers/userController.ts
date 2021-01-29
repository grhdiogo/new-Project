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
            cpf_cnpj,
            name,
            lastName,
            nickname,
            birthday,
            nfe,
            telephone,
            telephone2,
            number,
            complement,
            cepId
        } = req.body
        
        const user = new User
        

        user.username=username
        user.password=password
        user.cpf_cnpj=cpf_cnpj
        user.name=name
        user.lastName=lastName
        user.nickname=nickname
        user.birthday=birthday
        user.nfe=nfe
        user.telephone=telephone
        user.telephone2=telephone2
        user.number=number
        user.complement=complement
        user.cep=cepId
        

        const userRep = getRepository(User)
        
        
        await userRep.save(user)

        res.json("Usuário cadastrado")
        

        
        

        
    },//FUNCTION SAVE

    async searchAll(req: Request, res: Response){
        const userRep = getRepository(User)
        const users = await userRep.find({relations:["cep"]})
        res.json(users)
    },//FUNCTION SEARCHALL

    async searchOne(req: Request, res: Response){
        const {id} = req.params
        const userRep = getRepository(User)
        const users = await userRep.find({where:{id:id},relations:["cep"]})
        res.json(users)

    },//FUNCTION SEARCHONE

    async update(req: Request, res: Response){
        const userRep = getRepository(User)
        const{
            id,
            username,
            password,
            cpf_cnpj,
            name,
            lastName,
            nickname,
            birthday,
            nfe,
            telephone,
            telephone2,
            number,
            complement,
            cepId
        } = req.body
        
        const user = new User

        
        user.id=id
        user.username=username
        user.password=password
        user.cpf_cnpj=cpf_cnpj
        user.name=name
        user.lastName=lastName
        user.nickname=nickname
        user.birthday=birthday
        user.nfe=nfe
        user.telephone=telephone
        user.telephone2=telephone2
        user.number=number
        user.complement=complement
        user.cep=cepId




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