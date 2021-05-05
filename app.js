const express = require('express'); // import express

const bodyParser = require('body-parser'); //import body-parser : transform the code of a request into Json

const History = require('./models/History');
const Bookmarks = require('./models/Bookmarks');

const mongoose = require('mongoose'); //import mongoose

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');

mongoose.connect('mongodb+srv://martin:relief@cluster0.62yuy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Successful connection to MongoDB!'))
    .catch(() => console.log('Connection to MongoDB failed!'));

const app = express(); // create an express application

// allow requests for everyone
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

// const schema = buildSchema(`
//     type History{
//         id: ID!
//         url: String!
//     }
//
//     type Bookmarks{
//         id: ID!
//         url: String!
//     }
//
//     type Query{
//         history: [History!]!
//         bookmarks: [Bookmarks!]!
//     }
//
//     type Mutation{
//         addHistory(url:String!): History!
//         addBookmarks(url:String!): Bookmarks!
//     }
// `);
//
// const root = {
//     Query: {
//         history: () => users
//     },
//     Mutation: {
//         createUser: async (parent, {url}) => {
//             const history = new History({url: url});
//             history.save()
//             .then(() => res.status(201).json({ message: 'History saved'}))
//             .catch(error => res.status(400).json({ error }));
//         }
//     }
// }




app.use(
    '/graphql',
    graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphiql: true,
    })
)




// // *** HISTORY ***
//
// app.get('/api/history', (req, res, next) => {
//     History.find()
//         .then(history => res.status(200).json(history))
//         .catch(error => res.status(400).json({ error }));
// });
//
// app.get('/api/history/last', (req, res, next) => {
//     History.find({}).sort({_id:-1}).limit(1)
//         .then(history => res.status(200).json(history))
//         .catch(error => res.status(400).json({ error }));
// });
//
// app.post('/api/history', (req, res, next) => {
//     const history = new History({
//         url: req.body.url,
//     });
//     history.save()
//         .then(() => res.status(201).json({ message: 'History saved'}))
//         .catch(error => res.status(400).json({ error }));
// });
//
// // *** BOOKMARKS ***
//
// app.get('/api/bookmarks', (req, res, next) => {
//     Bookmarks.find()
//         .then(history => res.status(200).json(history))
//         .catch(error => res.status(400).json({ error }));
// });
//
// app.post('/api/bookmarks', (req, res, next) => {
//     const bookmarks = new Bookmarks({
//         url: req.body.url,
//         // ...req.body
//     });
//     bookmarks.save()
//         .then(() => res.status(201).json({ message: 'Bookmark saved'}))
//         .catch(error => res.status(400).json({ error }));
// });


module.exports = app; // export the application to use it from other files (especially the node server)

