const table = document.querySelector('table');
form = document.querySelector('.form-modal');

table.addEventListener('click', editing);
function editing(event) {
  if (event.target.nodeName === 'TD') {
    const textElement = event.target.textContent;
    const input = document.createElement('input');
    input.classList.add('input-editing');
    input.addEventListener('keyup', acceptanceChanges);
    input.value = event.target.textContent;
    applyingСhanges();
    event.target.textContent = '';
    event.target.append(input);
    function acceptanceChanges(eve) {
      if (eve.key === 'Enter') {
        event.target.textContent = input.value;
        google.charts.setOnLoadCallback(drawChart);
      }
      if (eve.key === 'Escape')
        textElement.textContent = event.target.textContent = textElement;
    }
  }
  return false;
}

function applyingСhanges() {
  const td = document.querySelectorAll('.table td');
  td.forEach(elem => {
    if (elem.lastChild.localName === 'input') {
      elem.textContent = elem.lastChild.value;
    }
  });
}
document.querySelector('button').addEventListener('click', () => {
  form.style.display = 'flex';
  applyingСhanges();
});

form.addEventListener('submit', submitting);
function submitting(event) {
  event.preventDefault();
  const inputValue = document.querySelectorAll(
      'input:not(.form-modal__submit)'
    ),
    tr = document.createElement('tr');
  inputValue.forEach((elem, index) => {
    const td = document.createElement('td');
    if (index === 0) td.textContent = elem.value.split('-').reverse().join('.');
    else {
      td.textContent = elem.value;
    }
    tr.append(td);
  });
  table.querySelector('tbody').append(tr);
  google.charts.setOnLoadCallback(drawChart);
}
document.addEventListener('click', () => {});
document.querySelector('.form-modal__close').onclick = event => {
  event.preventDefault();
  form.style.display = 'none';
};
