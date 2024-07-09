/*farmer.html*/

// script2.js

// Get the forms
const registerForm = document.querySelector('form:nth-child(1)');
const loginForm = document.querySelector('form:nth-child(2)');
const productForm = document.querySelector('form:nth-child(3)');

// Add event listeners to the forms
registerForm.addEventListener('submit', handleRegister);
loginForm.addEventListener('submit', handleLogin);
productForm.addEventListener('submit', handleProductSubmit);

// Function to handle register form submission
function handleRegister(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;

  // Validate form data
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // TO DO: Implement register logic here (e.g., send data to server, store in local storage, etc.)
  console.log(`Register successful! Name: ${name}, Email: ${email}, Phone: ${phone}, Address: ${address}`);
}

// Function to handle login form submission
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // TO DO: Implement login logic here (e.g., check credentials, authenticate user, etc.)
  console.log(`Login successful! Email: ${email}, Password: ${password}`);
}

// Function to handle product form submission
function handleProductSubmit(event) {
  event.preventDefault();
  const productName = document.getElementById('product-name').value;
  const productDescription = document.getElementById('product-description').value;
  const productPrice = document.getElementById('product-price').value;

  // TO DO: Implement product submission logic here (e.g., send data to server, store in local storage, etc.)
  console.log(`Product submitted! Name: ${productName}, Description: ${productDescription}, Price: ${productPrice}`);
}

/*farmer.html*/

/* customer.html*/

// script.js

// Get the forms and login status element
const signUpForm = document.getElementById('sign-up-form');
const signInForm = document.getElementById('sign-in-form');
const loginStatusElement = document.getElementById('login-status');

// Add event listeners to the forms
signUpForm.addEventListener('submit', handleSignUp);
signInForm.addEventListener('submit', handleSignIn);

// Function to handle sign up form submission
function handleSignUp(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // TO DO: Implement sign up logic here (e.g., send data to server, store in local storage, etc.)
  console.log(`Sign up successful! Name: ${name}, Email: ${email}, Password: ${password}`);
  updateLoginStatus('Signed up successfully!');
}

// Function to handle sign in form submission
function handleSignIn(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // TO DO: Implement sign in logic here (e.g., check credentials, authenticate user, etc.)
  console.log(`Sign in successful! Email: ${email}, Password: ${password}`);
  updateLoginStatus('Signed in successfully!');
}

// Function to update the login status element
function updateLoginStatus(message) {
  loginStatusElement.textContent = message;
}

/*customer.html*/

/*employment.html*/

// script2.js

// Get the forms
const registerForm = document.getElementById('registerForm');
const signInForm = document.getElementById('signInForm');

// Add event listeners to the forms
registerForm.addEventListener('submit', handleRegister);
signInForm.addEventListener('submit', handleSignIn);

// Function to handle register form submission
function handleRegister(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const mobileNumber = document.getElementById('mobileNumber').value;
  const address = document.getElementById('address').value;
  const foodType = getSelectedRadioValue('myRadio');
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validate form data
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // TO DO: Implement register logic here (e.g., send data to server, store in local storage, etc.)
  console.log(`Register successful! Username: ${username}, Mobile Number: ${mobileNumber}, Address: ${address}, Food Type: ${foodType}, Email: ${email}, Password: ${password}`);
}

// Function to handle sign in form submission
function handleSignIn(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('signInPassword').value;

  // TO DO: Implement sign in logic here (e.g., check credentials, authenticate user, etc.)
  console.log(`Sign in successful! Username: ${username}, Password: ${password}`);
}

// Function to get the selected radio value
function getSelectedRadioValue(name) {
  const radios = document.getElementsByName(name);
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return null;
}

/*employment.html*/