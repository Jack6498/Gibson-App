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
  console.log("ran processLogin")
  //meets requirements should make sure email is <= 320 characters, the password is <=64 and the name is <= 256
  var meetsRequirements = true;
  var password = document.getElementById('password').value;
  var email = document.getElementById('email').value;
  if (meetsRequirements) {
    console.log("in the if")
    window.location.href = "Dashboard/dashboard.html";
  }
}

//Add new user to data base
//Broken i think
function ProcessSignUp() {
  //where I put my php function
  console.log("sign up")
  var meetsRequirements = true;
  var password = document.getElementById('newPassword').value;
  var confirmation = document.getElementById('confirmPassword').value;
  var newEmail = document.getElementById('newEmail').value;
  if (password == confirmation) {
    if (checkInput(password)) {
      //probably need to show a verification prompt
      window.location.href = "Dashboard/dashboard.html";
    }
    } else {
      alert("Passwords must match");
  }
}

function checkInput(inputText) {
  // Create an empty array to store the error messages.
  const errors = [];

  // Check the length of the input text.
  if (inputText.length < 8) {
    errors.push("The input text must be at least 8 characters long.");
    alert("The input text must be at least 8 characters long.");
  }

  // Check if the input text contains a capital letter.
   const hasCapitalLetter = /[A-Z]/.test(inputText);
  if (!hasCapitalLetter) {
    errors.push("The input text must contain at least 1 capital letter.");
    alert("The input text must contain at least 1 capital letter.");
  }

  // Check if the input text contains a symbol.
  const hasSymbol = /[!@#$%^&*]/.test(inputText);
  if (!hasSymbol) {
    errors.push("The input text must contain at least 1 symbol.");
    alert("The input text must contain at least 1 symbol.");
  }

  // Check if the input text contains a number.
  const hasNumber = /[0-9]/.test(inputText);
  if (!hasNumber) {
    errors.push("The input text must contain at least 1 number.");
    alert("The input text must contain at least 1 number.");
  }

    
  // Return true if there are no errors, otherwise return false.
  return errors.length === 0;
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


// document.getElementById("runPHPButton").addEventListener("click", function() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "phpFunctions/testing.php", true);

//   xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       var resultContainer = document.getElementById("resultContainer");
//       resultContainer.innerHTML = xhr.responseText;
//     }
//   };

//   xhr.send();
// });




