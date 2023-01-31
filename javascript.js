const password = document.getElementById('password');
const passwordError = document.querySelector('#password + .error-msg');
const confirm = document.getElementById('confirm-password');
const confirmError = document.querySelector('#confirm-password + .error-msg');

confirm.addEventListener('input', (event) => {
  if (confirm.value.length > 0 && confirm.value !== password.value) {
    confirmError.textContent = '*Passwords do not match';
    confirm.setCustomValidity('Passwords do not match!');
  } else {
    passwordError.textContent = '';
    confirmError.textContent = '';
    password.setCustomValidity('');
    confirm.setCustomValidity('');
  }
});

password.addEventListener('input', (event) => {
  if (password.value.length > 0 && password.value !== confirm.value) {
    confirmError.textContent = '*Passwords do not match';
    confirm.setCustomValidity('Passwords do not match!');
  } else {
    passwordError.textContent = '';
    confirmError.textContent = '';
    password.setCustomValidity('');
    confirm.setCustomValidity('');
  }
});
