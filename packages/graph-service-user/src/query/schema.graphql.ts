import { gql } from 'apollo-server'

export const typeDefs = gql`
    extend type Query {
        users: [User]
    }

    type User @key(fields: "id"){
        id: ID!
        firstName: String
        lastName: String
        email: String
    }
`;