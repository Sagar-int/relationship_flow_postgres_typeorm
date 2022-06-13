import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Banker } from "../entities/Banker";

//Creting a banker
const createBanker = async (req:Request, res:Response, Next:NextFunction) => {
   try {
    const bankerRepository = AppDataSource.getRepository(Banker);

    const banker = await bankerRepository.save(req.body)
    return res.send({
        msg:"Banker created successfuly",
        banker:banker
    })
   } catch (error) {
       console.log(error);
   }
}


//Getting all bankers
const getBankers = async (req:Request, res:Response, Next:NextFunction) => {
    const bankerRepository = AppDataSource.getRepository(Banker);

    const bankers = await bankerRepository.find()
    return res.send({
        msg:"All Bankers",
        banker:bankers
    })
}

//Deleteing Banker
const deleteBanker = async (req:Request, res:Response, Next:NextFunction) => {
    const bankerRepository = AppDataSource.getRepository(Banker);
    const banker = await bankerRepository.findOneBy({id: parseInt(req.params.id)});
    await bankerRepository.remove(banker)
    
    return res.send({
        msg:"banker deleted Successfully",
    })
}


export default { createBanker, getBankers, deleteBanker };