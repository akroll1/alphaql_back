import { ApolloServer } from 'apollo-server'
import fs from 'fs'

const Books = require('./books');
require('dotenv').config();

const typeDefs = fs.readFileSync(__dirname + '/schema.graphql').toString();

// The resolvers
const resolvers = {
    Query: {
        books: () => Books.getAllBooks(),
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen(5000, () => {
    console.log('Go to http://localhost:5000/graphiql to run queries!');
});