import {Entity,Column,PrimaryGeneratedColumn,OneToMany} from 'typeorm'
import Order from './Order';


@Entity('user')
export default class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    name: string;
    @Column()
    lastName: string;
    @Column()
    birthday: string;
    @Column()
    nfe: string;
    @Column()
    telephone: number;
    @Column()
    telephone2: number;
    @Column()
    country: string;
    @Column()
    state: string;
    @Column()
    city: string;
    @Column()
    zipCode: number;
    @Column()
    zone: string;
    @Column()
    street: string;
    @Column()
    number: number;
    @Column()
    complement: string;
    @OneToMany(()=>Order,order => order.user,{cascade:['insert','update']})
    order: Order[]






}