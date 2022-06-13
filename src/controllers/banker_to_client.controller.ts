import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Banker } from "../entities/Banker";
import { Client } from "../entities/Client";
import { Transaction, TransactionType } from "../entities/Transaction";

//Creting a transaction
const connectBankerToClient = async (req:Request, res:Response, Next:NextFunction) => {
   
    const {bankerID, clientID} = req.params

    const bankerRepository = AppDataSource.getRepository(Banker);
    const banker = await bankerRepository.findOneBy({id: parseInt(bankerID)});
    const clientRepository = AppDataSource.getRepository(Client);
    const client = await clientRepository.findOneBy({id: parseInt(clientID)});

    if (!banker || !client) {
        return res.send({
            msg:"Banker or Client not found"
        })
    }
 
    banker.client = [
        client
    ]

    await bankerRepository.save(banker);


    return res.send({
        msg: "Banker connected to client successfuly",
    })
}

export default { connectBankerToClient };