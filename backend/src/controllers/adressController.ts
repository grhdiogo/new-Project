import {getRepository} from 'typeorm'
import Adress from '../models/Adress'
import {Request, Response} from 'express'
import * as Yup from 'yup'

export default{
    async save(adress: Adress){
        const adressRep = getRepository(Adress)

        adressRep.save(adress)

    },
    async searchAll(){
        const adressRep = getRepository(Adress)
        const adresses = await adressRep.find()
        return adresses
    }

}