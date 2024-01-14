// index.js
// where your node app starts

// init project
require('dotenv').config();

var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
// example output:
/* {"ipaddress":"162.158.158.197",
"language":"en-US,en;q=0.9",
"software":"Mozilla/5.0 (X11; CrOS x86_64 14816.131.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"}*/
app.get('/api/whoami', function (req, res) {
  let ip = req.ip; //ipaddress
  let lang = req.headers["accept-language"]; //language
  let soft = req.headers["user-agent"] //software
  //test header variables
  console.log(ip)
  console.log(lang)
  console.log(soft)

  //res.json()
  res.json({ipaddress:`${ip}`,language:`${lang}`,software:`${soft}`})
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
