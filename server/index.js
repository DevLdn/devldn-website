require('dotenv-safe').config();
var FormData = require('form-data');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const validator = require('email-validator');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 80;
const HOST = process.env.HOST || 'localhost';

app.use(bodyParser.json());
app.use(cors());

app.post('/invite', (req, res) => {

    let email = req.body.email;
    if (!email || !validator.validate(email)) {
        res.status(400).json({error: 'Please enter a valid email address.'});
        return;
    }

    let formData = new FormData();
    formData.append('token', process.env.TOKEN);
    formData.append('email', email);

    fetch('https://devldn.slack.com/api/users.admin.invite', { 
        method: 'POST',
        body: formData,
    })
    .then(res => res.json())
    .then(json => {
        if (!json.ok) {
            res.status(401).send(json)
            return;
        }
        res.json({ok: true})
    })
});

if (process.env.NODE_ENV === 'production') {
  // Serve out of a different build dir in production
  app.use(express.static(path.join(__dirname, '/client')));

  app.get('*', (req, res) => {
    console.log(path.join(__dirname, '/client/index.html'));
    res.sendfile(path.join(__dirname, '/client/index.html'));
  });
} else {
  app.use(express.static(path.join(__dirname, '/../client/public')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../client/public/index.html'));
  });
}

app.listen(PORT, HOST, () => console.log(`devldn.ca listening on ${HOST}:${PORT}!`));
