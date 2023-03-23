

;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };


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


   


    var flatPrice = function() {
        if( $().slider ) {
            $( function() {
                $( "#slide-range" ).slider({
                  range: true,
                  min: 0,
                  max: 2900,
                  values: [ 0, 2900 ],
                  slide: function( event, ui ) {
                    $( "#amount" ).val( "$" + ui.values[ 0 ] + ".00" + " - " + "$" + ui.values[ 1 ] + ".00" );
                  }
                });
                $( "#amount" ).val( $( "#slide-range" ).slider( "values", 0 ) + "$" + " - " + $( "#slide-range" ).slider( "values", 1 ) + "$" );
            });
        }
    };














   


    
   	// Dom Ready
	$(function() { 
      flatAccordion();
      flatPrice();  

      flatShopSearch();

   	});
})(jQuery);