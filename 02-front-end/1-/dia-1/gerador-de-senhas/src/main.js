import { nanoid } from 'nanoid';

const passwordBtnEl = document.getElementById('password-btn')
passwordBtnEl.addEventListener('click', () => {
  const generateRandomPassword = nanoid();
  displayPasswordEl.innerHTML = generateRandomPassword;
});

const displayPasswordEl = document.getElementById('display-password');
