import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/Client";
import { Transaction, TransactionType } from "../entities/Transaction";

//Creting a transaction
const createTransaction = async (req:Request, res:Response, Next:NextFunction) => {
    const transactionRepository = AppDataSource.getRepository(Transaction);
    const {clientID} = req.params
    const {type, amount} = req.body

    const clientRepository = AppDataSource.getRepository(Client);
    const client = await clientRepository.findOneBy({id: parseInt(clientID)});

    if (!client) {
        return res.send({
            msg:"Client not found"
        })
    }


    let trans = new Transaction();
    trans.amount = amount;
    trans.type = type;
    trans.client = client;

    const transaction = transactionRepository.create(
        trans
    )
    console.log();
    
    await transactionRepository.save(transaction);
    console.log("fourth")

    if (transaction.type === TransactionType.DEPOSIT) {
        client.balance = client.balance + amount
    }else if(transaction.type === TransactionType.WITHDRAW){
        client.balance = client.balance - amount
    }

    await clientRepository.save(client);

    return res.send({
        msg: "transaction successfuly",
        transaction: transaction
    })
}


//Getting all transactions
const getTransactions = async (req:Request, res:Response, Next:NextFunction) => {
    const transactionRepository = AppDataSource.getRepository(Transaction);

    const transactions = await transactionRepository.find()
    return res.send({
        msg:"All transactions",
        transaction:transactions
    })
}

//Deleteing transaction
const deleteTransaction = async (req:Request, res:Response, Next:NextFunction) => {
    const transactionRepository = AppDataSource.getRepository(Transaction);

    const transaction = await transactionRepository.findOneBy({id: parseInt(req.params.id)});
    await transactionRepository.remove(transaction)
    
    return res.send({
        msg:"transactions deleted Successfully",
    })
}



export default { createTransaction, getTransactions, deleteTransaction };