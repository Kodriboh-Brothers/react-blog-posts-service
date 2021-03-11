'use strict';

require('dotenv').config();
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = require('express')();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.POST_SERVER_PORT || 4000

// Posts stored a memory, this would usually be 
// our database
const posts = {}

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', async (req, res) => {
    // Generate random id
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };

    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: {
            id, title
        }
    });

    // Return created and post created
    res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
    console.log('ReceivedEvent', req.body.type);

    res.send({});
});

app.listen(port, () => {
    console.log(`Post service listening on port: ${port}`);
})