const express = require('express')
const mst = require('mustache')
const mustacheExpress = require('mustache-express')

const app = express()

app.engine('mst', mustacheExpress)
app.set('views', './templates')
app.set('view engine', 'mst')

const authenticate = (request, respond, next) => {
  if (request.query.userName === 'Robby' && request.query.password === 'Rocks') {
    next()
  } else {
    respond.send('Wrong Answer')
  }
}

app.get('/', (request, respond) => {
  respond.render('home')
})

app.post('/', (request, respond) => {
  console.log('Hello!')
})

app.use(authenticate)

app.listen(3000, () => {
  console.log('Something Just Moved')
})
