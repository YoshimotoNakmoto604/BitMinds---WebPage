document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Retrieve user data from localStorage
        const userData = JSON.parse(localStorage.getItem(username));

        if (userData && userData.password === password) {
            alert('Login successful!');
            // Redirect to home page or any other desired page
            window.location.href = 'home.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }

        loginForm.reset();
    });
});