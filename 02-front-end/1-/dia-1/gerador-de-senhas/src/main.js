import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const displayPasswordEl = document.getElementById('display-password');
const passwordBtnEl = document.getElementById('password-btn');
passwordBtnEl.addEventListener('click', () => {
    const generateRandomPassword = nanoid();
    displayPasswordEl.innerHTML = generateRandomPassword;
});

displayPasswordEl.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    alert('Senha Copiada!');
});
