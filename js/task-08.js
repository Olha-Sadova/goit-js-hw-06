const form = document.querySelector('.login-form');

const userEmail = document.querySelector('[type="email"]');

const password = document.querySelector('[type="password"]');

form.addEventListener('submit', function (event) {
        event.preventDefault();
        const elements = {
            email: userEmail.value,
            pass: password.value
        };


        if (userEmail.value === '' ||
            password.value === '') {
            return alert('Все поля должны быть заполнены!');
        }
        console.log(elements);

        form.requestFullscreen();
    });