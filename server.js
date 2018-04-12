// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// app.use(bodyParser.json());
// var jsonParser = bodyParser.json({ type: 'application/json'});

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/whoami", (req, res) => {
  var ipAddress = req.socket.remoteAddress;
  var ip = ipAddress.substring(ipAddress.indexOf("1"));
  var semiCol = req.get('Accept-language').indexOf(';');
  
  var startOS = req.get('user-agent').indexOf('(');
  var stopOS = req.get('user-agent').indexOf(')');
  
  var strSplit = req.get('user-agent').split(' ');
  var strLen = strSplit.length - 1;
  var browser = strSplit[strLen];
  
  
  var resObj = {
    ip: ip,
    operatingsystem: req.get('user-agent').substring(startOS+1,stopOS),
    language: req.get('Accept-language').substring(0,semiCol),
    browser: browser
  };
  res.json(resObj);
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
