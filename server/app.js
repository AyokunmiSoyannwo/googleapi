const express = require('express');
const cors = require('cors');
const data = require('./data');
const app = express();
app.use(cors());
app.use(express.json());


app.get('/results', (req, res) => {
    res.json(data).status(200)
})

app.get('/results/random', (req, res) => {
    res.send(data[Math.floor(Math.random()*data.length)]).status(200)
})

module.exports = app;
