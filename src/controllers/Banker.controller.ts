import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Banker } from "../entities/Banker";

//Creting a client
const createBanker = async (req:Request, res:Response, Next:NextFunction) => {
    const clientRepository = AppDataSource.getRepository(Banker);

    const banker = await clientRepository.save(req.body)
    return res.send({
        msg:"Banker created successfuly",
        client:banker
    })
}


//Getting all clients
const getBankers = async (req:Request, res:Response, Next:NextFunction) => {
    const clientRepository = AppDataSource.getRepository(Banker);

    const bankers = await clientRepository.find()
    return res.send({
        msg:"All Bankers",
        client:bankers
    })
}

// //Deleteing Banker
// const deleteBanker = async (req:Request, res:Response, Next:NextFunction) => {
//     const clientRepository = AppDataSource.getRepository(Banker);
//     let banker_id = req.params.id as string;
//     const bankers = await clientRepository.findOne(banker_id);
//     return res.send({
//         msg:"Bankers deleted Successfully",
//     })
// }


export default { createBanker, getBankers };