const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const app = express();

const gardenlightsConfig = require('./gardenlights.config.json');
const podcastConfig = require('./podcasts.config.json');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.type("json");
    res.send(
        { configurations: [
            {url: 'http://' + req.hostname + ':'+ port + '/podcast'},
            {url: 'http://' + req.hostname + ':'+ port +  '/gardenlights'}
        ]}
    );
});

app.get('/podcast', (req, res) => {
    res.json(podcastConfig);
});

app.get('/gardenlights', (req, res) => {
    res.json(gardenlightsConfig);
});

app.listen(port, () => console.log('Listening on port ' + port));
