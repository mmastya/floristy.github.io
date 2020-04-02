$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 4,
      loop: true,
      margin: 15,
      dots: false,
      nav: true,
      navText: [
        '<div class="bouquets-arrow-owl bouquets-left"></div>',
        '<div class="bouquets-arrow-owl bouquets-right"></div>'
      ],
      responsive:{
        0:{
          items:4
        },
        768:{
          items:4
        },
        1920:{
          items:4
        }
      }
    });
  });
