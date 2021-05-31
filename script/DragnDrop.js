// Модальное окно

const formModal = document.querySelector('.form-modal');
formModal.addEventListener('mousedown', DragDragnDrop);
function DragDragnDrop(event) {
  if (event.target.localName === 'input') return false;
  this.style.cursor = 'pointer';
  let shiftX = event.clientX - this.getBoundingClientRect().left;
  let shiftY = event.clientY - this.getBoundingClientRect().top;
  document.addEventListener('mousemove', trackingForm);
  function trackingForm(event) {
    formModal.style.left = event.pageX - shiftX + 'px';
    formModal.style.top = event.pageY - shiftY + 'px';
  }
  formModal.onmouseup = () => {
    document.removeEventListener('mousemove', trackingForm);
    formModal.style.cursor = 'auto';
  };
}

// Таблица


