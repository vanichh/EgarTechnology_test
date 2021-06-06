// window.onscroll = () => {
//   console.log(Math.round(document.documentElement.scrollTop));
// };

// Модальное окно
const hoverArea = document.querySelector('.hoverArea');
const formModal = document.querySelector('.form-modal');
formModal.addEventListener('mousedown', DragDragnDrop);
function DragDragnDrop(event) {
  if (event.target.localName === 'input') return false;
  this.style.cursor = 'pointer';
  let shiftX = event.clientX - this.getBoundingClientRect().left;
  let shiftY = event.clientY - this.getBoundingClientRect().top;
  document.addEventListener('mousemove', trackingForm);
  formModal.onmouseup = () => {
    if (formModal.offsetLeft < 100) {
      formModal.style.top = 0;
      formModal.style.left = 0;
    }
    if (formModal.offsetLeft > 1500) {
      formModal.style.top = 0;
      formModal.style.left =
        document.documentElement.clientWidth - formModal.offsetWidth + 'px';
    }
    hoverArea.hidden = true;
    document.removeEventListener('mousemove', trackingForm);
    formModal.style.cursor = 'auto';
  };
  function trackingForm(event) {
    console.log(formModal.offsetLeft);
    let rigth =
      document.documentElement.clientWidth -
      (formModal.offsetLeft + formModal.offsetWidth);
    formModal.style.left = event.pageX - shiftX + 'px';
    formModal.style.top = event.pageY - shiftY + 'px';
    if (formModal.offsetLeft < 50 && formModal.offsetTop < 50) {
      hoverArea.style = '';
      hoverArea.hidden = false;
    } else {
      hoverArea.hidden = true;
    }
    if (rigth <= 50 && formModal.offsetTop < 50) {
      hoverArea.style.cssText = `
          left: auto;
          right: 0;
          border-left: none;
          border-right: 5px solid #00BF80;
      `;
      hoverArea.hidden = false;
    }
  }
}

// Таблица
