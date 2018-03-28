const express = require('express');
const  app = express();
const bodyParser = require('body-parser');

const ms = require('./controllers/messages_controller');

app.use(bodyParser.json());

//Define routes 
app.get('/api/messages', ms.read);

app.post('/api/messages', ms.create);

app.put('/api/messages/:id', ms.update);

app.delete('/api/messages/:id', ms.delete);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on Port ${3000}`));
