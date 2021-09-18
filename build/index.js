"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const graphql_1 = require("./graphql");
const database_1 = require("./database");
const mount = async (app) => {
    const db = await (0, database_1.connectDB)();
    const server = new apollo_server_express_1.ApolloServer({
        resolvers: graphql_1.resolvers,
        typeDefs: graphql_1.typeDefs,
        context: () => ({ db })
    });
    await server.start();
    server.applyMiddleware({ app, path: "/api" });
    app.listen(process.env.PORT);
    console.log(`[app]:http//localhost:${process.env.PORT}`);
    const listings = await db.listings.find({}).toArray();
    console.log(listings);
};
mount((0, express_1.default)()).then(r => console.log("Successfully created connection"));
//# sourceMappingURL=index.js.map