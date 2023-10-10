//Startup code
document.getElementById('create_acc').style.display = 'none';
document.getElementById('log_in').style.display = 'flex'



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
  //where I put my php function
  var meetsRequirements = true;
  var password = document.getElementById('password').innerHTML;
  var email = document.getElementById('email').innerHTML;
  if (meetsRequirements) {
    window.location.href = "Dashboard/dashboard.html";
  }
}

//Add new user to data base
//Broken i think
function ProcessSignUp() {
  //where I put my php function
  console.log("sign up")
  var meetsRequirements = true;
  var password = document.getElementById('newPassword').innerHTML;
  var confirmation = document.getElementById('confirmPassword').innerHTML;
  var newEmail = document.getElementById('newEmail').innerHTML;
  if (password == confirmation){
    if (meetsRequirements) {
      //probably need to show a verification prompt
    window.location.href = "Dashboard/dashboard.html";
  }else{
      alert("Passwords must match")
  }
  }
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
  xhr.open("GET", "phpFunctions/testing.php", true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var resultContainer = document.getElementById("resultContainer");
      resultContainer.innerHTML = xhr.responseText;
    }
  };

  xhr.send();
});




