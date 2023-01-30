const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const app = express();
const PORT = 3001;

//Middleware
app.use(express.json());
app.use('/api', api);

//Main html
app.use(express.static('public'));

//Get route for notes page
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
