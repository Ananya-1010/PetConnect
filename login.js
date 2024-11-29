function login(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    
    if (username === 'admin' && password === 'password123') {
        
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html'; 
    } else {
        errorMessage.style.display = 'block';
    }
}


window.onload = function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && window.location.pathname === '/index.html') {
        window.location.href = 'login.html'; 
    }
};