console.log("잘있니")

let elInputUsername = document.querySelector('#username');

console.log(elInputUsername);
elInputUsername.value = 'hana';

let elFailureMessage = document.querySelector('.failure-message')
console.log(elFailureMessage)

elFailureMessage.classList.remove('hide')