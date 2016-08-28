var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

// tells express to serve all files in /app directory without processing them
app.use(express.static(rootPath + '/app'));

app.listen(8000);
console.log('Listening on port 8000...');