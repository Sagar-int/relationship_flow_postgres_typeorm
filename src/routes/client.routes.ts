import * as express from "express";
import controller from "../controllers/Client.controller";

const router = express.Router();

//Creating Client
router.post("/client", controller.createClient);

//Geting all Clients
router.get("/clients", controller.getClients);

//Deleting Client
router.delete("/client/:id", controller.deleteClient);


export default router;   
