const lastName = document.getElementById('last_name')
const firstName = document.getElementById('first_name')
const eMail = document.getElementById('mail')
const password = document.getElementById('password')
const submit = document.getElementById('submit')

submit.addEventListener('click', (event) => {
    event.preventDefault()

    if (lastName.value == ""){
        Error(lastName, 'Last Name cannot be empty')
    }
    if (firstName.value == ""){
        Error(firstName, 'First Name cannot be empty')
    }
    if (eMail.value == ""){
        Error(eMail, 'Looks like this is not an email')
    }
    if (password.value == ""){
        Error(password, 'Password cannot be empty')
    }
})

function Error(element, message) {
    element.style.border = "2px solid red";
    const parent = element.parentElement;
    const span = parent.querySelector("span");
    span.textContent = message;
    span.style.visibility = "visible";
  }