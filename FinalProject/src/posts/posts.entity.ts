import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import {User} from "../users/user.entity";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToOne(() => User, (user) => user.posts)
    author: User
}