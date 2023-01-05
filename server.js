var express = require('express')

var app = express()

var cors = require('cors')
var path = require('path')
let dbConnect = require('./dbConnect')
let projectRoute = require('./routes/projectRoute')
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/', projectRoute)

app.get('/', (req, res) => {
  res.render('index')
})

var port = process.env.port || 3000

app.listen(port, () => {
  console.log('App listening to: ' + port)
})
