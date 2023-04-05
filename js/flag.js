{
  const orbit = document.querySelector('.content__right-orbit');
  const britishFlag = document.querySelector('.british-flag');
  const italyFlag = document.querySelector('.italy-flag');
  const indiaFlag = document.querySelector('.india-flag');
  const secondIndiaFlag = document.querySelector('.second-india-flag');
  const secondItalyFlag = document.querySelector('.second-italy-flag');
  const thirdIndiaFlag = document.querySelector('.third-india-flag');

  britishFlag.classList.add('hide');
  italyFlag.classList.add('hide');
  indiaFlag.classList.add('hide');
  secondIndiaFlag.classList.add('hide');
  secondItalyFlag.classList.add('hide');
  thirdIndiaFlag.classList.add('hide');

  setTimeout(() => {
    setTimeout(() => {
      britishFlag.classList.add('show-british-flag');

      britishFlag.classList.remove('hide');
    }, 400);

    setTimeout(() => {
      italyFlag.classList.add('show-first-italy-flag');

      italyFlag.classList.remove('hide');
    }, 800);

    setTimeout(() => {
      indiaFlag.classList.add('show-first-india-flag');

      indiaFlag.classList.remove('hide');
    }, 1200);

    setTimeout(() => {
      secondIndiaFlag.classList.add('show-second-india-flag');

      secondIndiaFlag.classList.remove('hide');
    }, 1600);

    setTimeout(() => {
      secondItalyFlag.classList.add('show-second-italy-flag');

      secondItalyFlag.classList.remove('hide');
    }, 2000);

    setTimeout(() => {
      thirdIndiaFlag.classList.add('show-third-india-flag');
      thirdIndiaFlag.classList.remove('hide');
    }, 2400);

    thirdIndiaFlag.addEventListener('animationend', () => {
      britishFlag.classList.remove('show-british-flag');
      italyFlag.classList.remove('show-first-italy-flag');
      indiaFlag.classList.remove('show-first-india-flag');
      secondIndiaFlag.classList.remove('show-second-india-flag');
      secondItalyFlag.classList.remove('show-second-italy-flag');
      thirdIndiaFlag.classList.remove('show-third-india-flag');

      orbit.classList.add('rotate-orbit');
      britishFlag.classList.add('flag-rotate');
      italyFlag.classList.add('flag-rotate');
      indiaFlag.classList.add('flag-rotate');
      secondIndiaFlag.classList.add('flag-rotate');
      secondItalyFlag.classList.add('flag-rotate');
      thirdIndiaFlag.classList.add('flag-rotate');
    });
  }, 3000);
}