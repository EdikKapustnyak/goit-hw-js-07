const input = document.querySelector('#name-input');
const nameSpan = document.querySelector('#name-output');

input.addEventListener('input', () => { 
    nameSpan.textContent = input.value.trim() || "Anonymous";  
})