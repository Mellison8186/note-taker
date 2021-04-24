const fs = require('fs');
const path = require('path');
const { request, json } = require('express');
const express = require('express');
const router = require('express').Router();
const { noteTaker } = require('../db/db.json');
// const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  router.get('/api/notes', (req, res) => {
    res.json(noteTaker);
  });

  router.post('/api/notes', (req, res) => {
    console.log(req.body)
    res.json(req.body);
  });

  router.delete('/api/notes/:id', (req, res) => {
    res.send(req.params.id);
  });

  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  module.exports = router;