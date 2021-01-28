import {Entity,Column,PrimaryGeneratedColumn,OneToMany,OneToOne, JoinColumn} from 'typeorm'
import Order from './Order';
import Cep from './Cep'


@Entity('user')
export default class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    cpf_cnpj: string;
    @Column()
    name: string;
    @Column()
    lastName: string;
    @Column({ type: 'date' })
    birthday: Date;
    @Column()
    nfe: string;
    @Column()
    telephone: number;
    @Column()
    telephone2: number;
    @Column()
    number: number;
    @Column()
    complement: string;
    @OneToMany(()=>Order,order => order.user,{cascade:['insert','update']})
    order: Order[]
    @OneToOne(()=>Cep,cep => cep.user)
    @JoinColumn({name:"cepId"})
    cep: Cep






}