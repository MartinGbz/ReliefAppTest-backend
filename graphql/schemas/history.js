exports.History = `
    type History {
        _id: ID!
        url: String!
    }
`;

exports.HistoryQueries = `
    history: [History!]!
    lastHistory: History
`;

exports.HistoryMutations = `
    addHistory(url:String!): History!
`;

// const { buildSchema } = require("graphql")
//
// module.exports = buildSchema(`
//     type History {
//         id: ID!
//         url: String!
//     }
//
//     type Query {
//         history: [History!]!
//     }
//
//     type Mutation {
//         addHistory(url:String!): History!
//     }
//
//     schema {
//         query: Query
//         mutation: Mutation
//     }
// `)
