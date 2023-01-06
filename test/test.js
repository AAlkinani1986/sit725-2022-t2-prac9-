let express = require('express')
var expect = require('chai').expect
var request = require('request')

describe('loadHomePage', function () {
  var url = 'http://localhost:3000'
  //it functions

  it('return status 200 to check if home page can load ', function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200)
      expect(response.body).not.null
      done()
    })
  })
  it('return body not null', function (done) {
    request(url, function (error, response, body) {
      expect(response.body).not.null
      done()
    })
  })
})
describe('loadDataFromMongoDB', function () {
  var url = 'http://localhost:3000/api/projects'
  it('return status 200 if projects api work ', function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200)

      done()
    })
  })
  it('return data', function (done) {
    request(url, function (error, response, body) {
      expect(response.body).not.null
      done()
    })
  })
  it('total data fetch equal to five', function (done) {
    request(url, function (error, response, body) {
      //console.log(JSON.parse(body).data)
      let data = ([] = JSON.parse(body).data)
      //console.log(data.length)
      expect(data.length).to.equal(5)
      done()
    })
  })
})
postData = {
  title: 'download',
  image: 'download.jpg',
  link: 'download',
  description: 'testing post data from website to mongoDB',
}

describe('insertDataToMongoDB', function () {
  postData = {
    title: 'download',
    image: 'download.jpg',
    link: 'download',
    description: 'testing post data from website to mongoDB',
  }
  //the config for our HTTP POST request
  postConfig = {
    url: 'http://localhost:3000/api/projects',
    form: postData,
  }
  it('return status 200 if projects api work ', function (done) {
    request.post(postConfig, function (error, response, body) {
      expect(response.statusCode).to.equal(200)
      done()
    })
  })
  var url = 'http://localhost:3000/api/projects'
  it('return data', function (done) {
    request(url, function (error, response, body) {
      expect(response.body).not.null
      done()
    })
  })
  it('total data fetch equal to six', function (done) {
    request(url, function (error, response, body) {
      //console.log(JSON.parse(body).data)
      let data = ([] = JSON.parse(body).data)
      //console.log(data.length)
      expect(data.length).to.equal(6)
      done()
    })
  })
})
describe('deleteDataFromMongoDB', function () {
  var url = 'http://localhost:3000/api/project/download'
  it('return status 200 if projects api work ', function (done) {
    request.delete(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200)

      done()
    })
  })
})
