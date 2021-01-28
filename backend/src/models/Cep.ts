import {Entity,Column,PrimaryGeneratedColumn,OneToMany,OneToOne, ManyToOne} from 'typeorm'
import User from './User';
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
    @OneToOne(()=>User,user => user.cep)
    user: User
    @ManyToOne(()=>CepGroup,cepGroup => cepGroup.cep)
    cepGroup: CepGroup






}