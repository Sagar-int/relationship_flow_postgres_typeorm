import { Entity, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from "typeorm"
import { Banker } from "./Banker"
import CommonEntity from "./CommonEntity"
import { Transaction } from "./Transaction"

@Entity('client')
export class Client extends CommonEntity{
   
    @Column({
        type:"numeric"
    })
    balance!: number

    @Column({
        default:true,
        name:'active'
    })
    is_active!: boolean

    @Column({
        type:"simple-json",
        nullable:true
    })
    additional_info!: {
        age:number,
        gender:string,
        state:string
    }

    @OneToMany(() => Transaction, (transaction) => transaction.client) // note: we will create client property in the Transaction class below
    transaction: Transaction[]

    @ManyToMany(() => Banker, (banker) => banker.client)
    banker: Banker[]

    @Column()
    @CreateDateColumn()
    created_at!: Date

    @Column()
    @UpdateDateColumn()
    updated_at!: Date
}