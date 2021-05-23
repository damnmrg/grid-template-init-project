$(document).ready(function(){
  $('.header-navbar__btn').on('click', function(){
   $(this).toggleClass('open');
   $('.header-navbar__list').stop(true, true).fadeToggle(500);
  });
 });
 window.matchMedia('(min-width: 768px)').addListener(function() {
  $('.header-navbar__list').css('display', '');
});