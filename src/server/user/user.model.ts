import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Message } from "../message/message.model";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @OneToMany(type => Message, message => message.user)
    messages: Message[]
}
