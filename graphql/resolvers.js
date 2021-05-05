const historyResolvers = require('./resolvers/history');
const bookmarksResolvers = require('./resolvers/bookmarks');


module.exports = {
    ...historyResolvers,
    ...bookmarksResolvers
};
