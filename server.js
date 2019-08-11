const express = require('express');
const app = express();
const routes = require('./routes');
const port = process.env.PORT || 3001;

app.use('/public', express.static(__dirname + '/client/public/'));

app.get('/', function(req, res) {
 
});

app.listen(port, function() {
  console.log('\n\n🤖🤖🤖🤖🤖🤖🤖🤖\n\n👂 :', port, '\n\n🤖🤖🤖🤖🤖🤖🤖🤖\n\n');
});