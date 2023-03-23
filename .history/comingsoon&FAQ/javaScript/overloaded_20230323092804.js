
;(function($) {
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
            }); 
      });
    };
        $(function() { 
          flatEffectDir()
          removePreloader()
           });
    })(jQuery);
    
    