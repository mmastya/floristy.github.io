$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoHeight: true,
      dotsClass: "toggle-list",
      dotClass: "toggle-list__item",
      margin: 30,
      responsive:{
        0:{
          items:1
        },
        768:{
          items:2
        },
        1920:{
          items:4
        }
      }
    });
  });

  