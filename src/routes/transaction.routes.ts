import * as express from "express";
import controller from "../controllers/Transaction.controller";

const router = express.Router();

//Creating Client
router.post("/client/:clientID/transaction", controller.createTransaction);

//Geting all Clients
router.get("/transactions", controller.getTransactions);

//Deleting Client
router.delete("/transaction/:id", controller.deleteTransaction);


export default router;   
