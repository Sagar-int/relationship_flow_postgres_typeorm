import * as express from "express";
import controller from "../controllers/banker_to_client.controller";

const router = express.Router();

//Creating Client
router.put("/banker/:bankerID/client/:clientID", controller.connectBankerToClient);

// //Geting all Clients
// router.get("/transactions", controller.getTransactions);

// //Deleting Client
// router.delete("/transaction/:id", controller.deleteTransaction);


export default router;   
