{
  const form = document.querySelector('.content__form');
  const input = document.querySelector('.content__input');
  const btn = document.querySelector('.content__search-btn');

  form.addEventListener('submit', e => {
    e.preventDefault();
  });

  input.addEventListener("input", function() {
    this.value = this.value.replace(/[!@#$%^&*()]/g, '');
  });

  btn.addEventListener('click', () => {
    if (input.value.length <= 12 && input.value.length >= 4) {
      input.value = '';
    }
  })
}