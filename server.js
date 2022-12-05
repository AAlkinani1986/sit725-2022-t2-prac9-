var express = require('express')
var app = express()
var cors = require('cors')
let projectCollection
app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
//mongoDB Connection
const MongoClient = require('mongodb').MongoClient

//add the database connections...
const uri =
  'mongodb+srv://Aalkinani:Aalkinani@pets.48befsl.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true })
// Create collection
const createCollection = (collectionName) => {
  client.connect((err, db) => {
    projectCollection = client.db().collection(collectionName)
    if (!err) {
      console.log('MongoDB connected')
    } else {
      console.log('DB Error: ', err)
      process.exit(1)
    }
  })
}
//Insert project
const insertProjects = (project, callback) => {
  projectCollection.insert(project, callback)
}
// post api.....
app.post('/api/projects', (req, res) => {
  console.log('new Project added', req.body)
  var newProject = req.body
  insertProjects(newProject, (err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err })
    } else {
      res.json({
        statusCode: 200,
        message: 'Project Successfully added',
        data: result,
      })
    }
  })
})
//get project...
const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback)
}

app.get('/api/projects', (req, res) => {
  getProjects((err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err })
    } else {
      res.json({ statusCode: 200, message: 'Success', data: result })
    }
  })
})

var port = process.env.port || 3000

app.listen(port, () => {
  console.log('App listening to: ' + port)
  createCollection('Pets')
})
