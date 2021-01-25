import {Entity,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn} from 'typeorm'


@Entity('login')
export default class Login{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    user: string;
    @Column()
    pass: string;

}