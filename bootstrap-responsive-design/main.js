document.addEventListener('DOMContentLoaded', () => {
  $(document).scroll(() => {
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height())
  })
  AOS.init();
})