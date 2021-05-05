const { buildSchema } = require('graphql');

const historySchema = require('./schemas/history');
const bookmarksSchema = require('./schemas/bookmarks');

module.exports = buildSchema(`
    ${historySchema.History}
    ${bookmarksSchema.Bookmarks}
    
    type RootQuery{
        ${historySchema.HistoryQueries}
        ${bookmarksSchema.BookmarksQueries}
    }
    
    type RootMutation{
        ${historySchema.HistoryMutations}
        ${bookmarksSchema.BookmarksMutations}
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)

