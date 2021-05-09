const fs = require('fs');
const path = require('path');
const { request, json } = require('express');
const express = require('express');
const router = require('express').Router();
const notes = require('../db/db.json');
const { uuid } = require('uuidv4');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  router.get('/api/notes', (req, res) => {
    res.json(notes);
  });

  router.post('/api/notes', async (req, res) => {
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuid()
    }
    notes.push(newNote)
    await fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes))
    console.log(req.body)
    res.json(req.body);
  });

  router.delete('/api/notes/:id', async (req, res) => {
    const notesToKeep = await notes.filter((note) => {
      console.log(note.id)
      console.log(req.params.id)
      return note.id !== req.params.id
    })
    await fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesToKeep))
    res.send(notesToKeep);
  });

  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  module.exports = router;