document.addEventListener('DOMContentLoaded', () => {

  const element = document.querySelector(".scroll");

  element.addEventListener('scroll', (event) => {
    event.preventDefault();

    element.scrollBy({
      left: event.deltaY < 0 ? -30 : 30,
      behavior: 'smooth'
      
    });
  });
});