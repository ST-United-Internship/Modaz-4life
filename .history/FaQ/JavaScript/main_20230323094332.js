
(function($) {
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
    var flatEffectDir = function(){
      if($().hoverdir){
          $('.data-effect').each(function(){
              $(this).find('.data-effect-item').hoverdir({
                  hoverDelay: 15,
                  hoverElem: '.overlay-effect'
              })
          })
      };
  };
  var removePreloader = function() {        
    $(window).on("load", function () {
        $(".loader").fadeOut();
        $("#loading-overlay").delay(500).fadeOut('slow',function(){
        $(this).remove();
        alert("OK")
        }); 
  });
};
	$(function() { 
      flatAccordion();
      flatEffectDir()
      removePreloader()
   	});
})(jQuery);

