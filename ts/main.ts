$('.nav-link').on('click', () => $('.navbar-toggler').trigger('click'));

let rellax = new Rellax('.rellax');

window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

$('.owl-carousel').owlCarousel({
  margin: 20,
  autoplay: true,
  autoplayTimeout: 2500,
  loop: true,
  center: true,
  responsiveClass: true,
  dots: false,
  responsive: {
    0: {
      items: 3,
      nav: true,
    },
    600: {
      items: 5,
      nav: false
    },
    1000: {
      items: 7,
      nav: true,
    }
  }
});
