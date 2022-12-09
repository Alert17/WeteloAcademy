import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import {Posts} from "../posts/posts.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    role: string;

    @Column()
    isAuth: boolean;

    @OneToMany(() => Posts, (post) => post.author)
    posts: Posts[]
}