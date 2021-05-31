import './DragnDrop.js';

String.prototype.bruteDate = function () {
  return this.split('-').reverse().join('.');
};

const table = document.querySelector('table'),
  form = document.querySelector('.form-modal');

table.addEventListener('click', editing);
function editing(event) {
  if (event.target.nodeName === 'TD') {
    const textElement = event.target.textContent;
    const input = document.createElement('input');
    input.classList.add('input-editing');
    input.addEventListener('keyup', acceptanceChanges);
    // устанваливаем инпуты при редактировании
    if (event.target.cellIndex === 0) {
      input.setAttribute('type', 'date');
      input.value = event.target.textContent.split('.').reverse().join('-');
    }
    if (event.target.cellIndex === 1) {
      input.setAttribute('type', 'text');
      input.value = event.target.textContent;
    }
    if (event.target.cellIndex === 2) {
      input.setAttribute('type', 'number');
      input.value = event.target.textContent;
    }
    applyingСhanges();
    event.target.textContent = '';
    // добавляем по кнопке или отменяем редактирование инпута
    event.target.append(input);
    function acceptanceChanges(eve) {
      if (eve.key === 'Enter') {
        event.target.textContent = input.value.bruteDate();
        addData();
      }
      if (eve.key === 'Escape') event.target.textContent = textElement;
    }
  }
  return false;
}
// переводим все инпуты из таблицы в текст
function applyingСhanges() {
  const td = document.querySelectorAll('.table td');
  td.forEach((elem, index) => {
    if (elem.lastChild !== null && elem.lastChild.localName === 'input') {
      if (index % 3 === 0) elem.textContent = elem.lastChild.value.bruteDate();
      else elem.textContent = elem.lastChild.value;
    }
  });
  addData();
}

// запускаем модальное окно
document.querySelector('button').addEventListener('click', () => {
  form.style.display = 'flex';
  applyingСhanges();
});

form.addEventListener('submit', submitting);
function submitting(event) {
  const obj = {}; // создаем объект для отрисовки графика
  event.preventDefault();
  // собираем данные с инпута и добавляем в таблицу
  const inputValue = document.querySelectorAll(
      'input:not(.form-modal__submit)'
    ),
    tr = document.createElement('tr');
  inputValue.forEach((elem, index) => {
    const td = document.createElement('td');
    if (index === 0) {
      td.textContent = elem.value.bruteDate();
      obj.x = elem.value;
    }
    if (index === 1) {
      td.textContent = elem.value;
    }
    if (index === 2) {
      td.textContent = elem.value;
      obj.y = Number(elem.value);
    }
    tr.append(td);
  });
  addData(obj);
  table.querySelector('tbody').append(tr);
}
document.querySelector('.form-modal__close').onclick = event => {
  event.preventDefault();
  form.style.display = 'none';
};
