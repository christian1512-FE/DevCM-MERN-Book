
const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int!
    savedBook: [Book]
}

type Book {
    bookId: ID!
    authors:[String!]!
    description: String!
    title: String!
    image: String!
    link: String!
}

type Auth { 
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(Username: String!, email: String!, password: String!): Auth
    saveBook(book: BookInput!): User 
    removeBook(bookId: String!): User 
}

`;

module.exports = typeDefs;
