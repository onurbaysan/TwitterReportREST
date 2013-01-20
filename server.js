var express = require('express'),
	followers = require('./routes/followers');
 
var app = express();
 
app.get('/followers', followers.findAll);
app.get('/followers/:screen_name', followers.findByScreenName);
 
app.listen(3000);
console.log('Listening on port 3000...');