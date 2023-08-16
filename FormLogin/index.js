
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

    function showSuccess(input) {
        const formControl = input.parentElement
        formControl.className = 'form-control success'
        const small = formControl.querySelector('small')
        small.innerText = message
    }

    function checkEmail(input) {
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (re.test(input.value.trim())) {
            showSuccess(input)
        } else {
            showError(input, 'Invalid Email')
        }
    }

    function checkRequired(inputArr) {
        let isRequired = false
        inputArr.forEach(function (input) {
            if (input.value.trim() === '') {
                showError(input, 'Cannot empty')
                isRequired - true
            } else {
                showSuccess(input)
            }
        })
        return isRequired
    }

    // function checkLength(input, min, max) {
    //     if (input.value.length < min) {
    //         showError(
    //             input,
    //             $(getFieldName(input)) phải có ít nhất ${min} ký tự
    //         )
    //     } else if(input.value.length > max) {
    //         showError(
    //             input,
    //             ${getFieldName(input)} phải có ít nhất ${max} ký tự
    //         )
    //     } else {
    //         showSuccess(input)
    //     }
    // }


    function checkLength(inputvalue, min, max) {
        if (inputvalue.length < min) {
          showError(input, $(getFieldName(input)), `phải có ít nhất ${min} ký tự`);
        } else if (inputvalue.length > max) {
          showError(input, $(getFieldName(input)), `phải có ít nhất ${max} ký tự`);
        } else {
          showsuccess(input);
        }
    }

    function checkPasswordsMatch(input1, input2) {
        if (input1.value !== input2.value) {
            showError(input2, 'Mật khẩu không đúng!')
        }
    }

    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() | input.id.slide(1)
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault()

        if(!checkRequired([username, email, password, password2])) {
            checkLength(username, 3, 15)
            checkLength(password, 6, 25)
            checkEmail(email)
            checkPasswordsMatch(password, password2)
        }
    })