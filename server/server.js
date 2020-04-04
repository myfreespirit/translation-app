const express = require('express');


const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.json('Greeting from Express')
});

app.listen(app.get('port'), () => {
    console.log(`Find the server at http://localhost:${app.get('port')}`);
});