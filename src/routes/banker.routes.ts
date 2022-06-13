import * as express from "express";
import controller from "../controllers/Banker.controller";

const router = express.Router();

//Creating Client
router.post("/banker", controller.createBanker);

//Geting all Clients
router.get("/bankers", controller.getBankers);

//Deleting Client
router.delete("/banker/:id", controller.deleteBanker);


export default router;   
