// const fs = require('fs');
// const path = require('path');
const { request } = require('express');
const express = require('express');
// const PORT = process.env.PORT || 3001;
const app = express();
const noteRoutes = require('./routes/noteRoutes.js');
const { db } = require('./db/db.json');

// app.use(express.static('public'));
// // parse incoming string or array data
// app.use(express.urlencoded({ extended: true }));
// // parse incoming JSON data
// app.use(express.json());

app.use('/', noteRoutes);

app.get('./routes', (req, res) => {
    res.send();
});

app.listen(3001, () => {
    console.log(`API server now on Port 3001!`);
});