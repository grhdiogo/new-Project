import {Entity,Column,PrimaryGeneratedColumn,OneToMany,OneToOne, ManyToOne} from 'typeorm'
import Client from './Client';
import CepGroup from './CepGroup'

@Entity('cep')
export default class Cep{
    @PrimaryGeneratedColumn()
    id: number;
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
    @OneToOne(()=>Client,client => client.cep)
    client: Client
    @ManyToOne(()=>CepGroup,cepGroup => cepGroup.cep)
    cepGroup: CepGroup






}