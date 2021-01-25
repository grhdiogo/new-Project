import {Entity,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn} from 'typeorm'
import Adress from './Adress'


@Entity('user')
export default class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    lastName: string;
    @Column()
    birthday: string;
    @OneToOne(()=> Adress, adress => adress.user,{cascade:['insert'],onUpdate: 'CASCADE', onDelete: 'CASCADE'})
    adress: Adress

}