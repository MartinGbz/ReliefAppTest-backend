const express = require('express'); // imporation de express

const bodyParser = require('body-parser'); //importation de body parser : transformer le code d'une requette en Json

const History = require('./models/History');

const mongoose = require('mongoose'); //importer mongoose

mongoose.connect('mongodb+srv://martin:relief@cluster0.62yuy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express(); // creer une application express

// autoriser les requettes pour tout le monde
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

// app.use((req, res, next) => {
//     res.json({message:'TEST message received'});
// });

app.get('/api/history', (req, res, next) => {
    History.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
});

app.post('/api/history', (req, res, next) => {
    const thing = new History({
        ...req.body
    });
    thing.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});



module.exports = app; // exporter l'application pour les utilisé depuis les autres fichiers (notament le serveur node)

