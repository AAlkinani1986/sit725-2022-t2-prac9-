require('dotenv').config()
//mongoDB Connection
const MongoClient = require('mongodb').MongoClient

//add the database connections...
const uri =
  'mongodb+srv://Aalkinani:Aalkinani@pets.48befsl.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true })
// Create collection
client.connect((err, db) => {
  if (!err) {
    console.log('MongoDB connected')
  } else {
    console.log('DB Error: ', err)
    process.exit(1)
  }
})
module.exports = client
