const table = document.querySelector('table');
form = document.querySelector('.form-modal');

table.addEventListener('click', editing);
function editing(event) {
  if (event.target.nodeName === 'TD') {
    const textElement = event.target.textContent;
    const input = document.createElement('input');
    input.addEventListener('keyup', acceptanceChanges);
    input.value = event.target.textContent;
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
document.querySelector('button').addEventListener('click', () => {
  form.style.display = 'flex';
});

form.addEventListener('submit', submitting);
function submitting(event) {
  event.preventDefault();
  const inputValue = document.querySelectorAll(
      'input:not(.form-modal__submit)'
    ),
    tr = document.createElement('tr');
  inputValue.forEach(elem => {
    const td = document.createElement('td');
    td.textContent = elem.value;
    tr.append(td);
  });
  table.querySelector('tbody').append(tr);
  google.charts.setOnLoadCallback(drawChart);
}
document.addEventListener('click', () => {
  
});
document.querySelector('.form-modal__close').onclick = (event) => {
  event.preventDefault();
  form.style.display = 'none';
};
