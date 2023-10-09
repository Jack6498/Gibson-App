//Startup code
document.getElementById('create_acc').style.display = 'none';
document.getElementById('log_in').style.display = 'flex'
const LogInButton = document.getElementById('log_in_button').addEventListener('click', ()=> {ProcessLogin()})

  const SignUpButton = document.getElementById('sign_up_button').addEventListener('click', ()=> {ProcessSignUp()})


//Code for role selection
const choices = document.querySelector('.choices');
choices.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => {
    // Remove the `selected` class from all list items
    choices.querySelectorAll('li').forEach(li => {
      li.classList.remove('selected');
    });

    // Add the `selected` class to the clicked list item
    li.classList.add('selected');
  });
});



  //send data to server and check if it matches any existing users 
  function ProcessLogin() {
  var email = document.getElementbyId('email').getInnerText();
  var pass = document.getElementbyId('password').getInnerText();
  //where I put my php function
}

  //Add new user to data base
  function ProcessSignUp() {
  var newEmail = document.getElementbyId('username').getInnerText();
  var newPass = document.getElementbyId('newEmail').getInnerText();
  var newName = document.getElementbyId('full_name').getInngerText();
  //put more php magic here  
}


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


document.getElementById("runPHPButton").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "testing.php", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var resultContainer = document.getElementById("resultContainer");
            resultContainer.innerHTML = xhr.responseText;
        }
    };

    xhr.send();
});




