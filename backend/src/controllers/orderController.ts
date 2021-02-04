import {getRepository,getManager} from 'typeorm'
import {Request, Response} from 'express'
import Order from "../models/Order"
import ItemOrder from "../models/itemOrder"



export default{
    async save(req: Request, res: Response){
        const{
            productID,
            quantityProducts,
            quantity,
            price,
            userID,
            paymentType,
            deliverDay,
            deliverPeriod,
            voucher,
        } = req.body 

        const itensOrder = []
        let totalOrder = 0
       
        for (let i = 0; i < quantityProducts; i++) {
            let itemOrder = new ItemOrder
            itemOrder.price=price[i]
            itemOrder.quantity=quantity[i]
            itemOrder.product=productID[i]

            totalOrder = totalOrder+(price[i]*quantity[i])

           itensOrder.push(itemOrder)
        }

        const orderRep = getRepository(Order)

        const order = new Order
        order.status="Aguardando Confirmação"
        order.total=totalOrder
        order.paymentType=paymentType
        order.deliverDay=deliverDay
        order.deliverPeriod=deliverPeriod
        order.user=userID
        order.itemOrder=itensOrder

        if(voucher!=0){
            order.voucher=voucher
        }
    
       orderRep.save(order)

        res.json(order)
    },//FUNCTION SAVE

    async searchAll(req: Request, res: Response){
        const orderRep = getRepository(Order)
        const orders = await orderRep.find({relations:['itemOrder','user']})
        res.json(orders)
    }

    
}