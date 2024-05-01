const productCards = document.querySelectorAll('.product-card');
const modal = document.getElementById('product-modal');
const modalContent = modal.querySelector('.modal-content');
const close = modal.querySelector('.close');
document.body.classList.add('modal-open');


function openModal(product) {
  modal.style.display = 'block';
  modalContent.innerHTML = `
    <h2>${product.querySelector('h3').textContent}</h2>
    <p>${product.querySelector('p').textContent}</p>
    <button class="add-to-cart">В корзину</button>
  `;
}


function closeModal() {
  modal.style.display = 'none';
}


productCards.forEach((card) => {
  card.addEventListener('click', () => {
    openModal(card);
  });
});


close.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});