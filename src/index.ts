import { AppDataSource } from "./data-source"
import * as express from "express";
import clientRouter from './routes/client.routes';
import bankerRouter from './routes/banker.routes';
import transactionRouter from './routes/transaction.routes';
import bankerToclientRouter from './routes/connect_banker_to_client.routes';
import bodyParser = require("body-parser");


const app = express();
app.use(express.json());
app.use(bodyParser.json());

//Routes
app.use("/api", clientRouter)
app.use("/api", bankerRouter)
app.use("/api", transactionRouter)
app.use("/api", bankerToclientRouter)



//Creating Database Connection
AppDataSource.initialize().then(async () => {
console.log("Connection Successful");
app.listen(5000, ()=>{
    console.log(`Listening on the port: http://localhost:5000`);
})
}).catch(error => console.log(error))
