import {Entity,Column,PrimaryGeneratedColumn,OneToMany} from 'typeorm'
import ItemOrder from './itemOrder'
@Entity('product')
export default class Product{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column("decimal", {scale: 2 })
    price: number;
    @Column()
    stock: number;
    @Column()
    code: string;
    @OneToMany(()=>ItemOrder,itemOrder => itemOrder.product,{cascade:['insert','update']})
    itemOrder: ItemOrder[]
  

}