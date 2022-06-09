import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export default class CommonEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    first_name!: string

    @Column({
        length: 100,
    })
    last_name!: string

    @Column({
        unique:true
    })
    email!: string

    @Column({
        unique: true,
        length: 10
    })
    card_number!: string

}