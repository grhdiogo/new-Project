import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,OneToMany} from 'typeorm'
import User from "./User"
import ItemOrder from "./itemOrder"
import Voucher from './Voucher'

@Entity('order')
export default class Order{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    status: string;
    @Column()
    total: number;
    @Column()
    paymentType: string;
    @Column()
    deliverDay: string;
    @Column()
    deliverPeriod: string;
    @OneToMany(()=>ItemOrder,itemOrder => itemOrder.order,{cascade:['insert','update']})
    itemOrder: ItemOrder[]
    @ManyToOne(()=>User, user => user.order)
    user: User
    @ManyToOne(()=>Voucher, voucher => voucher.order)
    voucher: Voucher

    
  
  

}