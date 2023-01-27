var express = require('express')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

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
const port = process.env.port || 3000

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})
io.on('connection', (socket) => {
  console.log('user connected')
  socket.on('message', (msg) => {
    console.log(`message: ${msg}`)
    io.emit('message', msg)
  })

  socket.on('disconnect', () => {
    console.log('user Disconnected')

    io.emit('message', 'User disconnected')
  })
})
