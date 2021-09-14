import exp from "constants";
import {GraphQLObjectType, GraphQLString, GraphQLSchema} from "graphql"

const query=new GraphQLObjectType({
    name:"Query",
    fields:{
        hello:{
            type:GraphQLString,
            resolve:()=>"Hello From the Query"
        }
    }
})

const mutation=new GraphQLObjectType({
    name:"Mutation",
    fields:{
        hello:{
            type:GraphQLString,
            resolve:()=>"Hello From the Mutation"
        }
    }
})

export const schema = new GraphQLSchema({query,mutation});
