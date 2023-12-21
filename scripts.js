const pwd = document.getElementById('password');
const cpwd = document.querySelector('#confirm-password');

let password = '';
pwd.addEventListener('input',
function(e){
  password = e.target.value;
  cpwd.setAttribute('pattern', password);
  cpwd.setAttribute('title', 'Pasword does not match');
}
);