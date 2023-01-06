let client = require('../dbConnect')
let projectCollection
setTimeout(() => {
  projectCollection = client.db().collection('Pets')
}, 2000)
//Insert project
const insertProjects = (project, callback) => {
  projectCollection.insertOne(project, callback)
}
//deleteOne
const deleteOne = (projectTitle, callback) => {
  //console.log(projectTitle)
  projectCollection.deleteOne({ title: projectTitle }, callback)
}
//get project...
const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback)
}
module.exports = { insertProjects, getProjects, deleteOne }
