import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity('product')
export default class Product{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    price: number;
    @Column()
    stock: number;
  

}