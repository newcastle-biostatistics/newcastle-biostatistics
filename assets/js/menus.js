$(document).ready(function() {
  $(".menu-container").on('mouseenter', function() {
    $(this).css('overflow-y', 'scroll'); /* Enable scrolling */
    $(this).on('scroll', function() {
      var menuHeight = $(this).height();
      var scrollHeight = $(this)[0].scrollHeight;
      var scrollTop = $(this).scrollTop();
      var scrollBottom = scrollHeight - (menuHeight + scrollTop);
      if (scrollBottom <= 1) {
        $(this).off('scroll');
        $(this).css('overflow-y', 'auto'); /* Disable scrolling */
      }
    });
  }).on('mouseleave', function() {
    $(this).off('scroll');
    $(this).css('overflow-y', 'auto'); /* Disable scrolling */
  });
});
