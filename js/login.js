document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (email.trim() === '' || password.trim() === '') {
        errorMessage.classList.remove('hidden');
    } else {
errorMessage.classList.add('hidden');
  sessionStorage.setItem('usuarioActivo', email);
 window.location.href = 'index.html';
    }
});

document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const errorMessage = document.getElementById('regErrorMessage');
    if (email.trim() === '' || password.trim() === '') {
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
        sessionStorage.setItem('usuarioActivo', email);
        window.location.href = 'index.html';
    }
});