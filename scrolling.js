document.addEventListener('DOMContentLoaded', () => {

  const element = document.getElementById("container");

  element.addEventListener('wheel', (event) => {
    event.preventDefault();

    element.scrollBy({
      left: event.deltaY<0 ? -100 : 100,
      behavior: 'smooth'
      
    });
  }, { passive: false }); 
});