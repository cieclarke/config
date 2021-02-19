const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const app = express();

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
    res.type("json");
    res.sendFile(
        path.join(__dirname + '/podcasts.config.json'),
        { headers: { "content-type": "application/json"}}
    );
});

app.get('/gardenlights', (req, res) => {
    res.type("json");
    res.sendFile(
        path.join(__dirname + '/gardenlights.config.json'),
        { headers: { "content-type": "application/json"}}
    );
});

app.listen(port, () => console.log('Listening on port ' + port));
