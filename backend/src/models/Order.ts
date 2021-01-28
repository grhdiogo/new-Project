import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,OneToMany} from 'typeorm'
import User from "./User"
import itemOrder from "./itemOrder"

@Entity('order')
export default class Order{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    status: string;
    @Column()
    total: number;
    @OneToMany(()=>itemOrder,itemOrder => itemOrder.order,{cascade:['insert','update']})
    itemOrder: itemOrder[]
    @ManyToOne(()=>User, user => user.order)
    user: User

    
  
  

}