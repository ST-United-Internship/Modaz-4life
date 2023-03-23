
;(function($) {

//    'use strict'
    var flatAccordion = function() {
      var speed= {duration: 600};
      $('.toggle-text').hide();
      $('.over-rise .toggle-title.active').siblings('.toggle-text').show();

      $('.over-rise .toggle-title').on('click', function(){
        if(!$(this).is('.active')) {
          $(this).closest('.over-rise').find('.toggle-title.active').toggleClass('active').next().slideToggle(speed);
          $(this).toggleClass('active');
          $(this).next().slideToggle(speed);
        }else {
          $(this).toggleClass('active');
          $(this).next().slideToggle(speed);
        }
      });
    };

	$(function() { 
      flatAccordion();
   	});
})(jQuery);

<script
  src="https://code.jquery.com/jquery-1.12.4.min.js"
  integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
  crossorigin="anonymous"></script>