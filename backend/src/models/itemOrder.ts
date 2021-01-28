import {Entity,Column,PrimaryGeneratedColumn,ManyToOne} from 'typeorm'
import Order from './Order'
import Product from "./Product"

@Entity('itemOrder')
export default class ItemOrder{
    @PrimaryGeneratedColumn()
    id: number;
    @Column("decimal", {scale: 2 })
    price: number;
    @Column()
    quantity: number;
    @ManyToOne(()=>Order, order => order.itemOrder)
    order: Order
    @ManyToOne(()=>Product, product => product.itemOrder)
    product: Product
    
  

}