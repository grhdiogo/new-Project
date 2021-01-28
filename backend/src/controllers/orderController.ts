import {getRepository,getManager} from 'typeorm'
import {Request, Response} from 'express'
import Order from "../models/Order"
import ItemOrder from "../models/itemOrder"



export default{
    async save(req: Request, res: Response){
        const{
            productID,
            quantityProduct,
            quantity,
            price,
            userID,
        } = req.body 

        const manager = getManager()

        const order = new Order
        
        const itensOrder = []
        let totalOrder = 0
       
        for (let i = 0; i < quantityProduct; i++) {
            let itemOrder = new ItemOrder
            itemOrder.price=price[i]
            itemOrder.quantity=quantity[i]
            itemOrder.product=productID[i]
            totalOrder = totalOrder+(price[i]*quantity[i])
           manager.save(itemOrder)
           

           itensOrder.push(itemOrder)
           console.log(itensOrder)
        }

        order.status="Aguardando Confirmação"
        order.user=userID
        order.itemOrder=itensOrder
        order.total=totalOrder

        
        
       manager.save(order)

        res.json(order)
    },

    
}