const router = require('express').Router();
const util = require('util')
const fs = require('fs');
const readFilesAsync = util.promisify(fs.readFile);
const writeFilesAsync = util.promisify(fs.writeFile);


// reads db.json and returns saved notes
router.get('/notes', (req, res) => {

    readFilesAsync('./db/db.json', 'utf8')
    .then((data) => { 

        let notes = JSON.parse(data);
        res.json(notes);

    });
});

// adds new notes to the db.json and body
router.post('/notes', (req, res) => {

    readFilesAsync('./db/db.json', 'utf8')
    .then((data) => {

        let notes = JSON.parse(data);
        let userNote = req.body;

        // randomize id number
        userNote.id = Math.floor(Math.random() * 100);
        notes.push(userNote);

        writeFilesAsync('./db/db.json', JSON.stringify(notes))
        .then((data) => {

            console.log('Successly Saved!!!');

        });

        res.json(notes);

    });
});

// deletes saved messages
router.delete('/notes/:id', (req, res) => {

    readFilesAsync('./db/db.json', 'utf8',)
    .then((data) => {

        let notes = JSON.parse(data);
        let updatedNotes = notes.splice(0, 1);
        writeFilesAsync('./db/db.json', JSON.stringify(updatedNotes))
        .then((data) => {

            console.log('Successfully Deleted!!!');

        });
        res.json(notes);
    });
}); 

module.exports = router;