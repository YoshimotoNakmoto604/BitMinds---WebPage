document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const userData = {
            username: username,
            email: email,
            password: password
        };

        // Save user data to localStorage
        localStorage.setItem(username, JSON.stringify(userData));

        alert('Account created successfully!');
        signupForm.reset();
    });
});
