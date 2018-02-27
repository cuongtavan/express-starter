var express = require('express'),
  app = express(),
  port = process.env.PORT || 8081;

app.get('/', function(req, res){
  res.send('Hello world')
})

app.listen(port, function(){
  console.log('Server listening on ', port);
})