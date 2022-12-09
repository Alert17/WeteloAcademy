import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    authorId: number;

}