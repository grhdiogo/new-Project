import {Entity,Column,PrimaryGeneratedColumn,OneToMany,OneToOne} from 'typeorm'
import Cep from './Cep';


@Entity('cepGroup')
export default class CepGroup{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @OneToMany(()=>Cep,cep => cep.cepGroup)
    cep: Cep[]






}