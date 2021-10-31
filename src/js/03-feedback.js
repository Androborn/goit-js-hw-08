// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.

// Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:
// 1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// 2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// 3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// 4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formEmail = document.querySelector('[name="email"]');
const formMessage = document.querySelector('[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';
let formInput = {};

form.addEventListener('input', throttle(saveFormInput, 500));
form.addEventListener('submit', submitHandler);

checkAndSetSavedFormInput();

function saveFormInput(event) {
  formInput[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formInput));
}

function checkAndSetSavedFormInput() {
  const storedValues = localStorage.getItem(LOCALSTORAGE_KEY);

  if (storedValues) {
    const { email, message } = JSON.parse(storedValues);

    formEmail.value = email;
    formMessage.value = message;

    formInput = JSON.parse(storedValues);
  }
}

function submitHandler(event) {
  event.preventDefault();

  console.log(formInput);
  event.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
