/*
Create a addCards Function will take items as an inputs
will go through the items for each item will sign the 
item objects such as image, title, link, and description into
a variable itemToAppend with html code.

*/
const addCards = (items) => {
  items.forEach((item) => {
    console.log(item)
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="./images/' +
      item.image +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      '</a></p>' +
      `<a class="waves-effect waves-light red btn-small" 
     " ><i class="material-icons right">
      delete</i>Delete</a>` +
      '</div>' +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="black-text card-text">' +
      item.description +
      '</p>' +
      '</div></div></div>'
    $('#card-section').append(itemToAppend)
  })
}
/*
submitForm
is a function that collect the inputs form popup window
model firstName, lastName, password, and email.
signing the value into the object fromData
and show the data in the console log.

*/
const submitForm = () => {
  let formData = {}
  formData.title = $('#title').val()
  formData.image = $('#image').val()
  formData.link = $('#link').val()
  formData.description = $('#description').val()

  console.log('Form Data Submitted: ', formData)
  addProjectToApp(formData)
}
//ajax
// to delete post from the cards
// function Delete(id) {
//   console.log('id', id)
//   $.ajax({
//     url: '/api/project/delete',
//     data: id,
//     type: 'delete',
//     success: (result) => {
//       location.reload() // it automatically  reload the page
//     },
//   })
// }
//to add new post to the cards
const addProjectToApp = (project) => {
  $.ajax({
    url: '/api/projects',
    data: project,
    type: 'POST',
    success: (result) => {
      location.reload() // it automatically  reload the page
    },
  })
}

const getProjects = () => {
  $.get('/api/projects', (response) => {
    if (response.statusCode == 200) {
      addCards(response.data)
    }
  })
}

/* after the page load will sign and call the function 
which is 
materialbox initializing the material box with jQuery
add listener to button submit event click
submitForm function will call when clicking on the submit button 
addCards will add cards to index html page by a append them to the end of
card-section div.
model() function will initialize  modal with jQuery 
*/

$(document).ready(function () {
  $('.materialboxed').materialbox()
  $('#formSubmit').click(() => {
    submitForm()
  })
  getProjects()
  $('.modal').modal()
})
