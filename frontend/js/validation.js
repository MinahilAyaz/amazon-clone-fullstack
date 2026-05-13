document.addEventListener('DOMContentLoaded', () => {
    // Helper to show/hide errors
    const toggleError = (id, show, message) => {
        const errorEl = document.getElementById(id);
        if (errorEl) {
            errorEl.style.display = show ? 'block' : 'none';
            if (message) errorEl.textContent = message;
        }
    };

    // Email validation regex
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // --- Login Validation ---
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            if (!isValidEmail(email)) {
                toggleError('email-error', true);
                isValid = false;
            } else {
                toggleError('email-error', false);
            }

            if (password.length < 8) {
                toggleError('password-error', true);
                isValid = false;
            } else {
                toggleError('password-error', false);
            }

            if (isValid) {
                console.log('Login successful, redirecting...');
                window.location.href = 'dashboard.html';
            }
        });
    }

    // --- Register Validation ---
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById('reg-name').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;
            const confirm = document.getElementById('reg-confirm').value;

            if (!name.trim()) {
                toggleError('name-error', true);
                isValid = false;
            } else {
                toggleError('name-error', false);
            }

            if (!isValidEmail(email)) {
                toggleError('reg-email-error', true);
                isValid = false;
            } else {
                toggleError('reg-email-error', false);
            }

            if (password.length < 8) {
                toggleError('reg-password-error', true);
                isValid = false;
            } else {
                toggleError('reg-password-error', false);
            }

            if (password !== confirm) {
                toggleError('confirm-error', true);
                isValid = false;
            } else {
                toggleError('confirm-error', false);
            }

            if (isValid) {
                console.log('Registration successful, redirecting to login...');
                window.location.href = 'login.html';
            }
        });
    }
});
