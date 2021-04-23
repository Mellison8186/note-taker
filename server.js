const path = require('path');
const { request } = require('express');
const express = require('express');
const router = require('express').Router();
// const PORT = process.env.PORT || 3001;
const app = express();
const noteRoutes = require('./routes/noteRoutes');
// const { v4: uuidv4 } = require('uuid');
// uuidv4(); // '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
const { db } = require('./db/db.json');

// Use noteRoutes
app.use('/', noteRoutes);

// app.get('./routes/noteRoutes', (req, res) => {
//     res.json(db);
// });

app.listen(3001, () => {
    console.log(`API server now on Port 3001!`);
});