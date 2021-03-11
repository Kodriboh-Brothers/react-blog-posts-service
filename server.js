'use strict';

require('dotenv').config();
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = require('express')();
app.use(bodyParser.json());

const port = process.env.POST_SERVER_PORT || 4000

// Posts stored a memory, this would usually be 
// our database
const posts = {}

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    // Generate random id
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };

    // Return created and post created
    res.status(201).send(posts[id]);
});

app.listen(port, () => {
    console.log(`Post service listening on port: ${port}`);
})