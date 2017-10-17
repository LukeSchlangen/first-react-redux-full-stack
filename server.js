var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port= 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/list', function(req,res) {
    res.send([{title: 'Cool item'},{title: 'Groovy item'},{title: 'Red item'},{title: 'Blue item'}]);
});

app.listen(port, function(){
    console.log('listening on port', port);
});