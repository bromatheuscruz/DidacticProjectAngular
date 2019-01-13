const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(__dirname + '/dist/angular-deploy'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/angular-deploy/index.html'));
});

app.listen(process.env.PORT || 8080);