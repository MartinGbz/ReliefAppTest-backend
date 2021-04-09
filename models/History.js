const mongoose = require('mongoose');

const historySchema = mongoose.Schema({
    url: { type: String, required: true },
});

module.exports = mongoose.model('History', historySchema);
