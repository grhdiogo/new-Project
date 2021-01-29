import {getRepository} from 'typeorm'
import Cep from '../models/Cep'
import {Request, Response} from 'express'

export default{
    async save(req: Request, res: Response){
        const{
            country,
            state,
            city,
            zipCode,
            zone,
            street,
            cepID
        } = req.body
        
      
        const cep = new Cep
        
        cep.country=country
        cep.state=state
        cep.city=city
        cep.zipCode=zipCode
        cep.zone=zone
        cep.street=street
       
        

        const cepRep = getRepository(Cep)
        
        
        await cepRep.save(cep)

        res.json("CEP cadastrado")
    },//FUNCTION SAVE

    async searchAll(req: Request, res: Response){
        const cepRep = getRepository(Cep)
        const ceps = await cepRep.find()
        res.json(ceps)
    },//FUNCTION SEARCHALL

    async searchOne(req: Request, res: Response){
        const {id} = req.params
        const cepRep = getRepository(Cep)
        const ceps = await cepRep.find({where:{id:id}})
        res.json(ceps)

    },//FUNCTION SEARCHONE

    async update(req: Request, res: Response){
        const{
            id,
            country,
            state,
            city,
            zipCode,
            zone,
            street,
            cepID
        } = req.body
        
      
        const cep = new Cep
        cep.id=id
        cep.country=country
        cep.state=state
        cep.city=city
        cep.zipCode=zipCode
        cep.zone=zone
        cep.street=street

        const cepRep = getRepository(Cep)
        
        cepRep.update(cep.id,cep)

        res.json("CEP atualizado")
        
        
    },//FUNCTION UPDATE


}