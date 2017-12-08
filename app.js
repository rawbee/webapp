var express = require('express')
var app = express()
var http = require('http')
app.set('port', process.env.PORT || 3000)

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/results', function (req, res) {
  let response = `<div><ul>`
  for(let param in req.query) {
    response += `<li>${param} : ${req.query[param]}<li>`
  }
  response += `</ul></div>`
  res.send(response)
})
 
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'))
});