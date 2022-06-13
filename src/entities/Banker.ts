import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm"
import { Client } from "./Client"
import CommonEntity from "./CommonEntity"

@Entity('banker')
export class Banker extends CommonEntity {

    @Column({
        unique: true,
        length: 10
    })
    employee_number!: string

    @ManyToMany(() => Client, 
    (client) => client.banker,
    {
        cascade:false
    }
    )
    @JoinTable({
        name:'bankers_clients'
    })
    client: Client[]

    // After you run the application, the ORM will create a banker_client_client_banker junction table:

    // +-------------+--------------+----------------------------+
    // |                album_photos_photo_albums                |
    // +-------------+--------------+----------------------------+
    // | banker_id    | int(11)      | PRIMARY KEY FOREIGN KEY    |
    // | client_id    | int(11)      | PRIMARY KEY FOREIGN KEY    |
    // +-------------+--------------+----------------------------+

    @Column()
    @CreateDateColumn()
    created_at!: Date

    @Column()
    @UpdateDateColumn()
    updated_at!: Date
}