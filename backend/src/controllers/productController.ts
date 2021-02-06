import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import Product from "../models/Product"


export default{
    async save(req: Request, res: Response){
        const{
            name,
            description,
            price,
            stock,
            code,
        } = req.body
        
        const product = new Product
        
       product.name = name
       product.description=description
       product.price=price
       product.stock=stock
       product.code=code
        

        const productRep = getRepository(Product)
        
        
        await productRep.save(product)

        res.json("Produto cadastrado")
    },

    async searchAll(req: Request, res: Response){
        const productRep = getRepository(Product)
        const products = await productRep.find()
        res.json(products)
    },//FUNCTION SEARCHALL

    async searchOne(req: Request, res: Response){
        const {id} = req.params
        const productRep = getRepository(Product)
        const product = await productRep.findOne({where:{id:id}})
        res.json(product)

    },//FUNCTION SEARCHONE

    async update(req: Request, res: Response){
        const{
            id,
            name,
            description,
            price,
            stock,
            code,
        } = req.body
        
        const product = new Product
        
        product.id=id
        product.name = name
        product.description=description
        product.price=price
        product.stock=stock
        product.code=code
        

        const productRep = getRepository(Product)



        productRep.update(product.id,product)

        res.json("Produto atualizado")
        
        
    },//FUNCTION UPDATE

    async delete(req: Request, res: Response){
        const productRep = getRepository(Product)
        const{
            id,
        } = req.body
        
        productRep.delete(id)

        res.json("Produto Deletado")

    }



}