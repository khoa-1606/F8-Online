
const form = document.querySelector('form')
    const usernanme = document.getElementById('username')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const password2 = document.getElementById('password2')

    function showError(input, message) {
        const formControl = input.parentElement
        formControl.className = 'form-control error'
        const small = formControl.querySelector('small')
        small.innerText = message
    }