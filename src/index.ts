// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import express, {Application} from 'express';
import {ApolloServer} from "apollo-server-express";
import {resolvers,typeDefs} from "./graphql";
import {connectDB} from "./database";

const mount = async (app: Application) => {
    const db = await connectDB();
    const server = new ApolloServer({
        resolvers,
        typeDefs,
        context: () => ({db})
    });
    await server.start();
    server.applyMiddleware({app, path: "/api"});
    app.listen(process.env.PORT);
    console.log(`[app]:http//localhost:${process.env.PORT}`);

    const listings = await db.listings.find({}).toArray();
    console.log(listings);
}
mount(express()).then(r => console.log("Successfully created connection") );
