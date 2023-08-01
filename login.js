const loginForm = document.getElementById('login-form');
const passwordInput = document.getElementById('password-input');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const password = passwordInput.value;

  if (password === 'your-password') {
    // Password is correct, store the authentication status and expiration time
    sessionStorage.setItem('isAuthenticated', true);
    const expirationTime = new Date().getTime() + 72 * 60 * 60 * 1000; // 3 hours from now
    sessionStorage.setItem('expirationTime', expirationTime);

    // Redirect to the index page
    window.location.href = 'index.html';
  } else {
    // Password is incorrect, show an error message
    errorMessage.textContent = 'Incorrect password. Please try again.';
    passwordInput.value = '';
  }
});
