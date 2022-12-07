let projectModel = require('../models/project')
// create project
const createProject = (req, res) => {
  console.log('new Project added', req.body)
  var newProject = req.body
  projectModel.insertProjects(newProject, (err, result) => {
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
}
//retrieveProject
const retrieveProject = (req, res) => {
  projectModel.getProjects((err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err })
    } else {
      res.json({ statusCode: 200, message: 'Success', data: result })
    }
  })
}
module.exports = { retrieveProject, createProject }
