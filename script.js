const pagination = document.querySelector('.pagination');
const pages = Array.from(pagination.querySelectorAll('.page'));
const prev = pagination.querySelector('.prev');
const next = pagination.querySelector('.next');

let currentPage = 1;

function updateButtons() {
  pages.forEach((page, index) => {
    if (index === currentPage - 1) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });

  prev.disabled = currentPage === 1;
  next.disabled = currentPage === pages.length;
}

function goToPage(page) {
  currentPage = page;
  updateButtons();
}

prev.addEventListener('click', () => {
  goToPage(currentPage - 1);
});

next.addEventListener('click', () => {
  goToPage(currentPage + 1);
});

updateButtons();