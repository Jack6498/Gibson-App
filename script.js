//Startup code
document.getElementById('create_acc').style.display = 'none';
document.getElementById('log_in').style.display = 'flex'

//Code for Sign Up Page
const choices = document.querySelector('.choices');

choices.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => {
    // Remove the `selected` class from all list items
    choices.querySelectorAll('li').forEach(li => {
      li.classList.remove('selected');
     console.log("This is a line to the console");
    });

    // Add the `selected` class to the clicked list item
    li.classList.add('selected');
    console.log("selected has been added");
  });
});


//open the signup page
const Sign_Up_Button = document.getElementById('load_create_acc');
Sign_Up_Button.addEventListener('click', () => {
  document.getElementById('log_in').style.display = 'none'
  document.getElementById('create_acc').style.display = 'flex';
});
//open signin page
const Sign_In_Button = document.getElementById('load_log_in');
Sign_In_Button.addEventListener('click', () => {
  document.getElementById('log_in').style.display = 'flex'
  document.getElementById('create_acc').style.display = 'none';
});