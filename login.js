// script.js
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const toLogin = document.getElementById('to-login');
const toSignup = document.getElementById('to-signup');
const brandText = document.getElementById('brand-text');

toLogin.addEventListener('click', (e) => {
  e.preventDefault();
  signupForm.classList.remove('active');
  loginForm.classList.add('active');
  brandText.textContent = "Sign in for personalized content today!";
});

toSignup.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.remove('active');
  signupForm.classList.add('active');
  brandText.textContent = "Sign up for personalized recommendations today!";
});