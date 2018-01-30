$(function() {
  $(window).on('resize', function(){
    if( $(document).width() <= 480 && !$('.team_item').parent().hasClass("block-flexible") ) {
  $('.team_item:lt(2)').wrapAll('<div class="block-flexible"></div>')
  $('.team_item.right').wrapAll('<div class="block-flexible"></div>')
  }
  else if( $(document).width() > 480) {
       $('.team_item').unwrap('.block-flexible')
  }
  })
  

});
