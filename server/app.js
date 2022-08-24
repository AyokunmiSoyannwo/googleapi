const express = require('express');
const cors = require('cors');
const data = require('./data');
const app = express();
app.use(cors());
app.use(express.json());


app.get('/results', (req, res) => {
    res.json(data)
})

module.exports = app;
