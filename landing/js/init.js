// Preloader
$(window).on("load", function() {
  $("#preloader")
    .delay(600)
    .fadeOut();
});

(function($) {
  $(function() {
    $(".sidenav").sidenav();
  });
  // end of document ready
})(jQuery); // end of jQuery name space
