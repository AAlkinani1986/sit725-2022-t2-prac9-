var express = require('express')
var router = express.Router()

let controller = require('../controller')
// post api.....
router.post('/api/projects/', (req, res) => {
  controller.projectController.createProject(req, res)
})
router.delete('/api/project/:projectTitle', (req, res) => {
  //console.log('title', req.params.projectTitle)
  controller.projectController.deleteProject(req.params.projectTitle, res)
})

router.get('/api/projects/', (req, res) => {
  controller.projectController.retrieveProject(req, res)
})
module.exports = router
