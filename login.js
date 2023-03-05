// Insert your code here
//Sign-up
document.querySelector('#register').addEventListener('click', function () {
    const name = document.querySelector('#registerName').value; 
    const email = document.querySelector('#registerEmail').value; 
    const password = document.querySelector('#registerPassword').value; 
    console.log('Sign-up');
    fetch('http://localhost:3000/users/signup', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ name: name, email: email, password: password }), 
    })
    .then(response => response.json()) 
    .then(data => { 
        if (data.result) {
           window.location.assign('index.html');
}})})

//Sign-in
document.querySelector('#connection').addEventListener('click', function () {
    const email = document.querySelector('#connectionEmail').value; 
    const password = document.querySelector('#connectionPassword').value; 
    console.log('Sign-in'); 
    fetch('http://localhost:3000/users/signin', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({  email: email, password: password }), 
    })
    .then(response => response.json()) 
    .then(data => { 
        if (data.result) {
          window.location.assign('index.html')
}})})