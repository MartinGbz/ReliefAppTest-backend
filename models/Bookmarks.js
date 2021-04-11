const mongoose = require('mongoose');

const bookmarksSchema = mongoose.Schema({
    url: { type: String, required: true },
});

module.exports = mongoose.model('Bookmarks', bookmarksSchema);
