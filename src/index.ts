import { AppDataSource } from "./data-source"
import * as express from "express";

const app = express();
app.use(express.json());

//Creating Database Connection
AppDataSource.initialize().then(async () => {
console.log("Connection Successful");

app.listen(5000, ()=>{
    console.log(`Listening on the port: http://localhost:5000`);
})
}).catch(error => console.log(error))
