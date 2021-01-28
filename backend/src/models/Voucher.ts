import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,OneToMany} from 'typeorm'

import Order from "./Order"


@Entity('voucher')
export default class Voucher{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    cod: string;
    @OneToMany(()=>Order,order => order.voucher,{cascade:['insert','update']})
    order: Order[]
    
  
  

}