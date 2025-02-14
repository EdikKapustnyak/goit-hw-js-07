const form = document.querySelector('.login-form');


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) { 
    event.preventDefault()
    const formElements = event.currentTarget.elements
    const email = formElements.email.value.trim();
    const password = formElements.password.value.trim();

    if (email === `` || password === ``) {
        alert('All form fields must be filled in');
        return;
    }
    const getInfo = { 
        email: email,
        password: password
    }
    console.log(getInfo);
    event.currentTarget.reset()
}
