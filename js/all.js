$(document).ready(function() {

  //下拉式選單
  $('.dropdown-class').click(function(event) {
    event.preventDefault();
    $('.dropdown-class').toggleClass('active');
    $('.dropdown-open-class').slideToggle();
  });
  $('.dropdown-contact').click(function(event) {
    event.preventDefault();
    $('.dropdown-contact').toggleClass('active');
    $('.dropdown-open-contact').slideToggle();
  });
    //燈箱
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'showImageNumberLabel':false,
    })
    //輪播器
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      speed: 3000,
      loop: true,
      autoplay: {
          delay: 1500,
      },        
      pagination:{
          el:'.swiper-pagination',
      },
    })
    //回到最上面
    $('.totop a').click(function(event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 1000);
     });
   });

