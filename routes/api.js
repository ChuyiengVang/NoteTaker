const path = require('path');
const express = require('express');
const { DataStore } = require('../fileHandler');

class Api {
    constructor(filePath) {
        this.router = express.Router()
        this.store = new DataStore(filePath)
        this.store.read();

        this.router.get('/posts', (req, res) => {
            res.json(this.store.data.posts);
        });

        this.router.get('/posts/:id', (req, res) => {
            res.json(this.store.data.posts[req.id]);
        });

        this.router.post('/posts/:id', (req, res) => {
            this.store.data.posts[req.id] = req.postBody;
            res.json(JSON.stringify({
                result: 'success'
            }));
            this.store.save()
        });

        this.router.delete('/posts/:id', (req, res) => {
            try {
            delete this.store.data.posts[req.id];
            } catch(err) {
                res.status(404).json(JSON.stringify({
                    error: err
                }))
            }
            res.json("{resut: 'Success'}");
        });
    }
};
module.exports = { Api };