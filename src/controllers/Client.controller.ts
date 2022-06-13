import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/Client";

//Creting a client
const createClient = async (req:Request, res:Response, Next:NextFunction) => {
    const clientRepository = AppDataSource.getRepository(Client);

    const client = await clientRepository.save(req.body)
    return res.send({
        msg:"Client created successfuly",
        client:client
    })
}


//Getting all clients
const getClients = async (req:Request, res:Response, Next:NextFunction) => {
    const clientRepository = AppDataSource.getRepository(Client);

    const clients = await clientRepository.find()
    return res.send({
        msg:"All Clients",
        client:clients
    })
}

//Deleteing client
const deleteClient = async (req:Request, res:Response, Next:NextFunction) => {
    const clientRepository = AppDataSource.getRepository(Client);
    const client = await clientRepository.findOneBy({id: parseInt(req.params.id)});
    await clientRepository.remove(client)
    
    return res.send({
        msg:"clients deleted Successfully",
    })
}



export default { createClient, getClients, deleteClient };