function openSignup() {
    document.getElementById('signUp').style.display = 'block';
}

function openSignin() {
    document.getElementById('signIn').style.display = 'block';
}

function closeModal() {
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('signUp').style.display = 'none';
}

function displaySignup() {
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('signUp').style.display = 'block';
}
