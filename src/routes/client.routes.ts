import * as express from "express";
import controller from "../controllers/Client.controller";

const router = express.Router();

//Creating Client
router.post("/clients", controller.createClient);

//Creating Client
router.get("/clients", controller.getClients);


export default router;   
