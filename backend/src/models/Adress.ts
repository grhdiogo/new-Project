import {Entity,Column,PrimaryGeneratedColumn,OneToOne, JoinColumn} from "typeorm"
import User from './User'

@Entity('adress')
export default class Adress{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    country: string;
    @Column()
    state: string;
    @Column()
    city: string;
    @Column()
    zipCode: string;
    @Column()
    zone: string;
    @Column()
    street: string;
    @Column()
    number: number;
    @Column()
    complement: string;
    @OneToOne(()=>User, user => user.adress,{onUpdate: 'CASCADE', onDelete: 'CASCADE'})
    @JoinColumn({name: 'userId'})
    user: User

    
    
    

}