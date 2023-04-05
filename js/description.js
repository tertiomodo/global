{
  const descr = document.querySelector('.content__descr');

  (async() => {
    const url = 'https://baconipsum.com/api/?type=lucky';
    const response = await fetch(url);
  
    const message = await response.json();
  
    descr.textContent = message;
  })();
}