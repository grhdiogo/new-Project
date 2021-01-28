import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import Order from "../models/Order"
import Product from "../models/Product"
import productController from "../controllers/productController"

export default{

    async save(req: Request, res: Response){
        const{
            price,
            quant,
            productID,
            orderID
        } = req.body

        
        
        

    }


}