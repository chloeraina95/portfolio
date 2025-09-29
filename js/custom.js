// scroller
loadSlider();
function loadSlider(){
  $('.general_banner').slick({
    infinite: true,
    dots: false,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    arrows: false,
    speed: 10000,
  });
  $('.general_banner_2').slick({
    infinite: true,
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    arrows: false,
    speed: 10000,
  });
  $('.general_banner_mob').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    arrows: false,
    speed: 10000,
  });
  $('.general_banner_2_mob').slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    arrows: false,
    speed: 10000,
  });
}

// section 1
$(".links-btn").click(function(){
  $(this).toggleClass("active");
  $(".links-cont").slideToggle();
});

$(".word-creative").click(function(){
  $(this).toggleClass("active");
});


// section 2
for (let i = 0; i < 100; ++i) {
  $("#scroll-s2").append("<div>meet<span>Awi</span></div>");
}

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (window.matchMedia('(max-width: 640px)').matches){
    if (y > 1800) {
        $('.skills-item').addClass('move');
    } else {
        $('.skills-item').removeClass('move');
    }
  }else{
    if (y > 800) {
        $('.skills-item').addClass('move');
    } else {
        $('.skills-item').removeClass('move');
    }
  }

});

$("#section-2 .avatar").click(function(){
  $(this).toggleClass("hov");
});


// section 3
$(".lscreen").hover(function(){
  $(this).toggleClass("hov");
  $(this).siblings('.bg-text').toggleClass("hov");
});
$(".bg-text").hover(function(){
  $(this).toggleClass("hov");
  $(this).siblings('.lscreen').toggleClass("hov");
});

function works(x){
  $(".works-nav-item").removeClass("active");
  $("#works-nav-" + x).addClass("active");

  $(".screens").removeClass("d-flex");
  $(".screens").addClass("d-none");
  $("#screen-" + x).removeClass("d-none");
  $("#screen-" + x).addClass("d-flex");

}