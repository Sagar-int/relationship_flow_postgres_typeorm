import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { Client } from "./Client"

export enum TransactionType{
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw'
}

@Entity('transaction')
export class Transaction {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type:'enum',
        enum: TransactionType
    })
    type!:string

    @Column({
        type:"numeric"
    })
    amount!:number

    @ManyToOne(() => Client, 
    (client) => client.transaction,
    {  
        onDelete:"CASCADE"
    }
    )
    client: Client

    @Column()
    @CreateDateColumn()
    created_at!: Date

    @Column()
    @UpdateDateColumn()
    updated_at!: Date
}