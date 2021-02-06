import {getRepository} from 'typeorm'
import Client from '../models/Client'
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
            telephone,
            telephone2,
            number,
            complement,
            cepId
        } = req.body
        
        const client = new Client
        

        client.username=username
        client.password=password
        client.cpf_cnpj=cpf_cnpj
        client.name=name
        client.lastName=lastName
        client.nickname=nickname
        client.birthday=birthday
        client.telephone=telephone
        client.telephone2=telephone2
        client.number=number
        client.complement=complement
        client.cep=cepId
        

        const clientRep = getRepository(Client)
        await clientRep.save(client)
        res.json("Usuário cadastrado")
        
    },//FUNCTION SAVE

    async searchAll(req: Request, res: Response){
        const clientRep = getRepository(Client)
        const client = await clientRep.find({relations:["cep"]})
        res.json(client)
    },//FUNCTION SEARCHALL

    async searchOne(req: Request, res: Response){
        const {id} = req.params
        const clientRep = getRepository(Client)
        const client = await clientRep.findOne({where:{id:id},relations:["cep"]})
        res.json(client)

    },//FUNCTION SEARCHONE

    async update(req: Request, res: Response){
        const clientRep = getRepository(Client)
        const{
            id,
            username,
            password,
            cpf_cnpj,
            name,
            lastName,
            nickname,
            birthday,
            telephone,
            telephone2,
            number,
            complement,
            cepId
        } = req.body
        
        const client = new Client

        
        client.id=id
        client.username=username
        client.password=password
        client.cpf_cnpj=cpf_cnpj
        client.name=name
        client.lastName=lastName
        client.nickname=nickname
        client.birthday=birthday
        client.telephone=telephone
        client.telephone2=telephone2
        client.number=number
        client.complement=complement
        client.cep=cepId




        clientRep.update(client.id,client)

        res.json("Usuário atualizado")
        
        
    },//FUNCTION UPDATE

    async delete(req: Request, res: Response){
        const clientRep = getRepository(Client)
        const{
            id,
        } = req.body
        
        clientRep.delete(id)

        res.json("Usuário Deletado")

    }



}//END OF EXPORT