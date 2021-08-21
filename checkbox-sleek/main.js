document.addEventListener('DOMContentLoaded', () => {
  let toggle= document.querySelector('.toggle');
  let inner= document.querySelector('.inner');

  toggle.addEventListener('click', () => {
    //inner.toggleAttribute("active")
    inner.classList.toggle('active')
  })
})