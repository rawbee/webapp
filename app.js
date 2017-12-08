var express = require('express')
var app = express()


var exphbs  = require('express-handlebars')
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000)


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.render('home');
})

app.get('/results', function (req, res) {
  let response = `<div><ul>`
  for(let param in req.query) {
    response += `<li>${param} : ${req.query[param]}<li>`
  }
  response += `</ul></div>`
  res.send(response)
})

var http = require('http')
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'))
});