import { IResolvers } from "@graphql-tools/utils";
import {Database, Listing, listingArgs, listingUpdateArgs} from "../../../lib/Types";
import {ObjectId} from "mongodb";
export const resolvers: IResolvers = {
    Query: {
            listings: async (
                root:undefined,
                _args: Record<string, unknown>,
                {db}: { db: Database}
            ) :Promise<Listing[]>=> await db.listings.find({}).toArray()
    },
    Mutation: {
            deleteListing: async (
                _root: undefined,
                {id}: { id: string },
                {db}: { db: Database}
            ): Promise<Listing> => {
                const deleteRes = await db.listings.findOneAndDelete({
                    _id: new ObjectId(id)
                });
                if (!deleteRes.value) {
                    throw new Error("failed to delete listing");
                }
                return deleteRes.value;
            },

            addListing: async (
                _root: undefined,
                {input}: listingArgs,
                {db , req}: { db: Database , req:Request},
            ): Promise<any> => {
                const insertRes = await db.listings.insertOne({
                    _id: new ObjectId(),
                    ...input
                })
                const insertedListing =insertRes.insertedId
                if (!insertRes) {
                    throw new Error("failed to insert product");
                }
                return insertRes;
            },

            updateListing: async (
                _root: undefined,
                {UpdateInput}: listingUpdateArgs,
                {db , req}: { db: Database , req:Request},
            ): Promise<any> => {
                console.log(UpdateInput._id);
                const insertRes2 = await db.listings.findOneAndUpdate(
                    {
                        _id: new ObjectId(UpdateInput._id)
                    },
                    {UpdateInput}
                )
                const updatedListing =insertRes2
                if (!insertRes2) {
                    throw new Error("failed to update product");
                }
                return insertRes2;
            }

        },

            Listing: {
                id: (listing: Listing): string => listing._id.toString()
            }
    };
