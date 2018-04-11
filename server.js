// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
var jsonParser = bodyParser.json({ type: 'application/json'});

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/hello", (req, res) => {
  console.log('hello,world');
  res.send('test');
  console.log(req.get('user-agent'));
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})

