const express = require('express');
const app = express();

const BodyParser = require('body-parser');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use('/', require('../routers/Stream-server.js'));

app.listen(3000, 'localhost', function (err) {

    if(!err)
        console.log('port is 3000');
    else
        console.log(err);

});
