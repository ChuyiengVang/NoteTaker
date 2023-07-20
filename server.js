// Import Express.js
const express = require('express');
// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');
// Import notes from db.json
const notes = require('./db/db.json')
// file system, standard library package for reading and writing files
const fs = require('fs')
// Initialize an instance of Express.js
const app = express();
// Specify on which port the Express.js server will run
const PORT = 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));
// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET route to get all of the notes
app.get('/api/notes', (req, res) => res.json(notes));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });