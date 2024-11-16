const usernameElement = document.getElementById('username');
const emailElement = document.getElementById('email');
const phoneElement = document.getElementById('phone');
const birthdateElement = document.getElementById("birthdate");
const checkboxesElement = document.querySelectorAll('input[type=checkbox]');
const radioElement = document.querySelectorAll('input[type=radio]');

const btnRegister = document.getElementById('btnRegister');
const inputElements = document.querySelectorAll('.input-row');

btnRegister.addEventListener('click', function() {
    Array.from(inputElements).map((element) =>
        element.classList.remove('success', 'error')
    );

    if (checkValidate()) {
        alert('Gửi đăng ký thành công');
    }
});

function checkValidate() {
    let usernameValue = usernameElement.value;
    let emailValue = emailElement.value;
    let phoneValue = phoneElement.value;
    let birthdateValue = birthdateElement.value;

    let isCheck = true;

    if (usernameValue == '') {
        setError(usernameElement, 'Tên không được để trống');
        isCheck = false;
    } else {
        setSuccess(usernameElement);
    }

    if (emailValue == '') {
        setError(emailElement, 'Email không được để trống');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailElement, 'Email không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(emailElement);
    }

    if (phoneValue == '') {
        setError(phoneElement, 'Số điện thoại không được để trống');
        isCheck = false;
    } else if (!isPhone(phoneValue)) {
        setError(phoneElement, 'Số điện thoại không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(phoneElement);
    }

    // get current date
    const currentDate = new Date();
    const birthdate = new Date(birthdateValue);

    const diff = new Date(currentDate - birthdate)
    const age = Math.abs(diff.getUTCFullYear() - 1970);

    if (age < 18) {
        setError(birthdateElement, 'Age >= 18');
        isCheck = false;
    } else {
        setSuccess(birthdateElement);
    }

    for (let i = 0; i < radioElement.length; i++) {
        if (radioElement[i].checked) {
            setSuccess(radioElement[0]);
            break;
        } else {
            setError(radioElement[0], 'Chon 1 trong 2 radio');
            isCheck = false;
        }
    }

    for (let i = 0; i < checkboxesElement.length; i++) {
        console.log(checkboxesElement[i].checked)
        if (checkboxesElement[i].checked) {
            setSuccess(checkboxesElement[0]);
            break;
        } else {
            setError(checkboxesElement[0], 'Chon 1 trong 2 check');
            isCheck = false;
        }
    }

    return isCheck;
}

function setSuccess(element) {
    element.parentNode.classList.add('success');
    element.parentNode.querySelector('span').innerText = "";
}

function setError(element, message) {
    let parentelement = element.parentNode;
    parentelement.classList.add('error');
    parentelement.querySelector('span').innerText = message;
}

function isEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function isPhone(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})$/.test(number);
}

function isNumber(number) {
    return /^[0-9]+$/.test(number);
}

function isAlphaNumberic(string) {
    return /^[0-9a-zA-Z]+$/.test(string);
}