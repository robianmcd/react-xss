const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

messages = ['hello', 'hi'];

app.use(express.static(__dirname));

app.post('/messages', (req, res) => {
    messages.unshift(req.body.message);
    res.send('Message added');
});

app.get('/messages', (req, res) => {
    res.send(messages);
});

app.listen(8004, () => console.log('App listening on port 8004'));