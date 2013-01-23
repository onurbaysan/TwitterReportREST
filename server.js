var express = require('express'),
	followers = require('./routes/followers');
	unfollowers = require('./routes/unfollowers');
	
var app = express();
 
app.get('/followers', followers.findAll);
app.get('/followers/:screen_name', followers.findByScreenName);
app.get('/unfollowers', unfollowers.findAll);
app.get('/unfollowers/:screen_name', unfollowers.findByScreenName); 
 
app.listen(3000);
console.log('Listening on port 3000...');