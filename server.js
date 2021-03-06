const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/deploy'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/deploy/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
})
