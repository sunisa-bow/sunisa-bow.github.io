$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -150
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

// Change the speed to whatever you want
// Personally i think 1000 is too much
// Try 800 or below, it seems not too much but it will make a difference

    //Animation ปุ่ม Scroll Up Down



// Start jQuery init
jQuery(document).ready(function( $ ) {
// Your custom jQuery code here, using $ to refer to jQuery.
// ------------------------CUSTOM JS HERE--------------------------------------
	
	//$(".third-logo").tooltip();
	
	//back to top / http://jsfiddle.net/neeklamy/RpPEe/
	$(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.gototop').fadeIn();	
			$('.mouse-scroll').fadeOut();
        } else {
            $('.gototop').fadeOut();
			$('.mouse-scroll').fadeIn();	
        }
    });

   /* $('.gototop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });	*/
	

// ------------------------END CUSTOM JS --------------------------------------  
    // End of custom your jQuery code.    
});// No more code under this line put all in jQuery(document).ready(function( $ ) 


