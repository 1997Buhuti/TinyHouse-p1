import express from 'express';
import {ApolloServer} from "apollo-server-express";
import {resolvers,typeDefs} from "./graphql/index";

const app=express();
const port=9000;

async function startServer() {
    const server=new ApolloServer({resolvers,typeDefs});
    await server.start();
    server.applyMiddleware({app,path:"/api"});
}
startServer();
app.listen(port);
console.log(`[app]:http//localhost:${port}`);