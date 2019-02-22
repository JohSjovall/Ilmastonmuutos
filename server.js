var express = require('express');
var app = express();
var port = 8080;

app.listen(port, function() {
    console.log('app on port 8080')
});

app.get('/', function(req, res){
    res.send('hello world');
})