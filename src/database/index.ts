import {MongoClient} from "mongodb";
import {Database} from "../lib/Types";

const user="User";
const userPassword="8H5B9NBZkqPjTbmu";
const cluster="Cluster0";
const url=`mongodb+srv://${user}:${userPassword}@${cluster}.x1eyy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

export const connectDB= async (): Promise<Database> =>{
    const client= await MongoClient.connect(url);
    const db=client.db("main");
    return{
        listings:db.collection("test_listings")
    }
};
