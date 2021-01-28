import {Entity,Column,PrimaryGeneratedColumn,OneToMany} from 'typeorm'
import itemOrder from "./itemOrder"
@Entity('product')
export default class Product{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column("decimal", { precision: 5, scale: 2 })
    price: number;
    @Column()
    stock: number;
    @Column()
    code: string;
    @OneToMany(()=>itemOrder,itemOrder => itemOrder.product,{cascade:['insert','update']})
    itemOrder: itemOrder[]
  

}