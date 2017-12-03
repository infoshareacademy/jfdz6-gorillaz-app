var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()

app.use(cors())
app.use(bodyParser())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.post('/users/:userId', function (req, res) {

  var api_key = 'key-ab9f05de26b6efda1bca897631e8fc14';
  var domain = 'sandbox13979c6a6baa41e782c71fc6c743496b.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  var mail = ( req.body && req.body.email) || 'wojtrawi@gmail.com'
console.log(JSON.stringify(req.body))
  var data = {
    from: 'Excited User <postmaster@sandbox13979c6a6baa41e782c71fc6c743496b.mailgun.org>',
    to: mail,
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness! for user ' + req.params.userId
  };

  mailgun.messages().send(data, function (error, body) {
    console.log("MSG", body);
  })

  res.send('Whoah! ' + req.params.userId)
})

app.listen(6006, () => console.log('Hi'))