import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Listing {
    id: ID!
    title: String!
    image: String!
    address: String!
    price: Int!
    numOfGuests: Int!
    numOfBeds: Int!
    numOfBaths: Int!
    rating: Int!
  }
  
  type rtnType {
    insertedId:ID!
    value:Boolean
  }
  
  input listingInput {
    title: String!
    image: String
    address: String!
    price: Int!
    numOfGuests: Int!
    numOfBeds: Int!
    numOfBaths: Int!
    rating: Int!
  }
  
  input listingUpdateInput{
         title: String!
         image: String
         address: String!
         price: Int!
         numOfGuests: Int!
         numOfBeds: Int!
         numOfBaths: Int!
         rating: Int!
  }
  
  type Query {
    listings: [Listing!]!
  }

  type Mutation {
    deleteListing(id: ID!): Listing!
    addListing(input: listingInput!):rtnType!
    updateListing(_id: ID!, input: listingUpdateInput!):Listing!
  }
`;
