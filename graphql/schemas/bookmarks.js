exports.Bookmarks = `
    type Bookmarks {
        _id: ID!
        url: String!
    }
`;

exports.BookmarksQueries = `
    bookmarks: [Bookmarks!]!
`;

exports.BookmarksMutations = `
    addBookmarks(url:String!): Bookmarks!
    removeBookmark(_id:String!): Bookmarks!
`;


// const { buildSchema } = require("graphql")
//
// module.exports = buildSchema(`
//     type Bookmarks{
//         id: ID!
//         url: String!
//     }
//
//     type Query{
//         bookmarks: [Bookmarks!]!
//     }
//
//     type Mutation{
//         addBookmarks(url:String!): Bookmarks!
//     }
//
//     schema {
//         query: Query
//         mutation: Mutation
//     }
// `)
