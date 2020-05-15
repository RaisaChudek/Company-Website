document.addEventListener('DOMContentLoaded', function () {

    const formElem = document.querySelector('form');

    formElem.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.querySelector('input[name=field-name]').value;
        const email = document.querySelector('input[name=field-email]').value;
        const message = document.querySelector('textarea[name=field-message]').value;
        const number = document.querySelector('input[name=field-number]').value;

        const errors = [];

        if (name.length <= 2) {
            errors.push('Wpisz poprawne imię i nazwisko');
        }
        if (email.indexOf('@') === -1) {
            errors.push('Wpisz poprawny adres email');
        }

        if (number.length < 9 || number.length > 9 || isNaN(number)) {
            errors.push('Wpisz poprawny numer telefonu')
        }
        if (message.length <= 30) {
            errors.push('Twoja wiadomość jest za krótka');
        }


        const errorElem = document.getElementById('error-message');
        const successElem = document.getElementById('success-message');

        if (errors.length > 0) {
            const listElem = document.createElement('ul');


            errors.forEach(function (err) {
                const liElem = document.createElement('li');
                liElem.innerText = err;
                listElem.appendChild(liElem);
            });

            errorElem.innerText = '';

            errorElem.appendChild(listElem);

            errorElem.classList.remove('d-none');

            successElem.classList.add('d-none');

        } else {
            successElem.innerText = 'Formularz wysłany';
            successElem.classList.remove('d-none');

            errorElem.classList.add('d-none');

            this.reset();
        }
    });


//NAWIGACJA MENU

    const elemsMainList = document.querySelectorAll('.nav > ul > li');
    elemsMainList.forEach(function (el) {
        el.addEventListener("mouseover", function (event) {
            const innerList = this.firstElementChild;
            if (innerList != null) {
                innerList.style.display = "block";
            }
        });
        el.addEventListener("mouseout", function (event) {
            const innerList = this.firstElementChild;
            if (innerList != null) {
                innerList.style.display = "none";
            }
        })

    });





});
