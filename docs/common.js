console.clear();

$("body").imagesLoaded(function () {
    setTimeout(function() {
      $('.loading').remove();
      SwiperBox1__init();
    }, 0);
  });
  

$(window).scroll(function() {
  let scrollTop = $(window).scrollTop();
  
  if ( scrollTop == 0 ) {
    $('.top-bar').removeClass('follow');
  }
  else {
    $('.top-bar').addClass('follow');
  }
});


$('.menu-1 > li').mouseenter(function() {
  const $li = $(this);
  const width = $li.width();
  const left = $li.position().left;
  $('.menu-1__line').css('left', left).css('width', width);
  
});

$('.menubox-1').mouseenter(function() {
  $(this).find(' > ul > li > ul, > .menubox-1__sub-menu-bg').stop().slideDown(00);
});

$('.menubox-1').mouseleave(function() {
  $(this).find(' > ul > li > ul, > .menubox-1__sub-menu-bg').stop().slideUp(00);
});

