const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.engine('mst', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mst')

const authenticate = (request, response, next) => {
  if (request.body.userName === 'Robby' && request.body.password === 'Rocks') {
    next()
  } else {
    response.redirect('/login')
  }
}

app.get('/login', (request, response) => {
  // response.send('whatevs')
  response.render('login')
})

app.use(authenticate)

app.post('/', (request, response) => {
  response.render('index', request.body)
})

app.listen(3000, () => {
  console.log('Something Just Moved')
})
