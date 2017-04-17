
$( document ).ready(function() {

  $('.flexslider').flexslider();

  jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');

        e.preventDefault();
    });

});
