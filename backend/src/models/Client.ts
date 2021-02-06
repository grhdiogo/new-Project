import {Entity,Column,PrimaryGeneratedColumn,OneToMany,OneToOne, JoinColumn} from 'typeorm'
import Order from './Order';
import Cep from './Cep'


@Entity('client')
export default class Client{
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
    @Column()
    nickname: string;
    @Column()
    birthday: string;
    @Column()
    telephone: number;
    @Column()
    telephone2: number;
    @Column()
    number: number;
    @Column()
    complement: string;
    @OneToMany(()=>Order,order => order.client,{cascade:['insert','update']})
    order: Order[]
    @OneToOne(()=>Cep,cep => cep.client)
    @JoinColumn({name:"cepId"})
    cep: Cep






}