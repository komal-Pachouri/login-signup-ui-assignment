// Track current mode
let isLogin = true;

const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submitBtn');
const toggleText = document.getElementById('toggleText');
const form = document.getElementById('authForm');
const success = document.getElementById('success');

// Toggle between login and signup
toggleText.addEventListener('click', () => {
  isLogin = !isLogin;
  title.textContent = isLogin ? 'Login' : 'Signup';
  subtitle.textContent = isLogin ? 'Login to continue' : 'Create your account';
  submitBtn.textContent = isLogin ? 'Login' : 'Signup';
  toggleText.textContent = isLogin
    ? "Don't have an account? Signup"
    : 'Already have an account? Login';

  nameInput.style.display = isLogin ? 'none' : 'block';
  confirmInput.style.display = isLogin ? 'none' : 'block';

  clearMessages();
  form.reset();
});

// Clear old errors and success
function clearMessages() {
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  success.textContent = '';
}

// Form validation
form.addEventListener('submit', function(e) {
  e.preventDefault();
  clearMessages();
  let valid = true;

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const name = nameInput.value.trim();
  const confirmPassword = confirmInput.value.trim();

  if (!isLogin && name === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    valid = false;
  }

  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required';
    valid = false;
  } else if (!email.includes('@')) {
    document.getElementById('emailError').textContent = 'Enter valid email';
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
    valid = false;
  }

  if (!isLogin && password !== confirmPassword) {
    document.getElementById('confirmError').textContent = 'Passwords do not match';
    valid = false;
  }

  if (valid) {
    success.textContent = isLogin ? 'Login successful 🎉' : 'Signup successful 🎉';
  }
});