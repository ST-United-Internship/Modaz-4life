

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

    var flatFilterBox = function(){
        $('.box-filter').hide();
        $('.show-filter').on('click',function(){
            $('.box-filter').slideToggle(1000);
            $('.filter-shop li.filter-list').toggleClass('active');
            $(this).toggleClass('active');
        });
        $('.box-filter .btn-close').on('click',function(){
            $('.box-filter').slideToggle(1000);
            $('.show-filter').removeClass('active');
            $('.filter-shop li.filter-list').removeClass('active');
        });
    };

    var flatShopSearch = function(){
        $('.shop-search').hide();
        $('.search-product').on('click',function(){
            $('.shop-search').slideToggle(1000);
            $(this).toggleClass('active');
        });
    };

    var topSearch = function () {
        $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID !== 'input-search' ) ) {
                $('.top-search').removeClass('show');                
            } 
        });

        $('.search').on('click', function(event){
            event.stopPropagation();
        });

        $('.search-form').on('click', function(event){
            event.stopPropagation();
        });        

        $('.search').on('click', function (event) {
            if(!$('.top-search').hasClass( "show" )) {
                $('.top-search').addClass('show');  
                event.preventDefault();                
            }
                
            else
                $('.top-search').removeClass('show');
                event.preventDefault();

        }); 
        $('.top-search .close').on('click', function(event){
            if($('.top-search').hasClass( "show" )) {
                $('.top-search').removeClass('show');  
                event.preventDefault();                
            }
        });        
  
    };

    var quantityNumber = function(){
        $('.quantity-button').on('click', function(){
            var numberValue= $(this).parent().find('.quantity-number').val();

            if($(this).text()=="+") {
                var newVal=parseFloat(numberValue) + 1;
            }else{
                if(numberValue > 0){
                    var newVal = parseFloat(numberValue) -1;
                }else{
                    newVal = 0;
                }
            }

            $(this).parent().find('.quantity-number').val(newVal);
        });
    };

    var flatTabs=function(){
        $('.flat-tabs').each(function(){
            $(this).find('.content-tab').children().hide();
            $(this).find('.content-tab').children().first().show();
            $(this).find('.menu-tab').children('li').on('click',function(){
                var liActive = $(this).index();
                var contentActive=$(this).siblings().removeClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive);
                contentActive.addClass('active').fadeIn("slow");
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive).siblings().hide();
            });
        });
    };

    var flatImagePopup = function(){
        if($().magnificPopup) {
            $('.flat-icon').each(function(){
                $(this).find('.zoom-popup').magnificPopup({
                    disableOn: 700,
                    type: 'image',
                    gallery:{
                        enabled: true
                    },
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: true
                });
            });
        };
    };

    var flatVideoPopup = function() {
        if ( $().magnificPopup ) {
            $('.popup-video').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: true
            });
        };
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


    var flatCarouselOwl = function() {
        if ( $().owlCarousel ) {
            $('.flat-carousel-box').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    nav: true,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var searchIcon = function () {
        $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID !== 'input-search' ) ) {
                $('.header-search-form').removeClass('show');                
            } 
        });

        $('.header-search-icon').on('click', function(event){
            event.stopPropagation();
        });

        $('.header-search-form').on('click', function(event){
            event.stopPropagation();
        });        

        $('.header-search-icon').on('click', function (event) {
            if(!$('.header-search-form').hasClass( "show" )) {
                $('.header-search-form').addClass('show'); 
                event.preventDefault();                
            }
                
            else
                $('.header-search-form').removeClass('show');
                event.preventDefault();

        });     
  
    };  

    var headerFixed = function(){
        if($('body').hasClass('header_sticky')){
            var nav = $('#header');

            if( nav.length ){
                var offsetTop = nav.offset().top,
                headerHeight = nav.height(),
                injectSpace = $('<div/>', {
                    height: headerHeight
                }).insertAfter(nav);

                $(window).on('load scroll', function(){
                    if($(window).scrollTop() > offsetTop){
                        nav.addClass('is-fixed');
                        injectSpace.show();
                    }else {
                        nav.removeClass('is-fixed');
                        injectSpace.hide();
                    }

                    if($(window).scrollTop() > 300 ) {
                        nav.addClass('is-small');
                    }else {
                        nav.removeClass('is-small');
                    }
                });
            }
        };
    };

    var responsiveMenu = function() {

        var menuType = 'desktop';



        $(window).on('load resize', function() {

            var currMenuType = 'desktop';



            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {

                currMenuType = 'mobile';

            }



            if ( currMenuType !== menuType ) {

                menuType = currMenuType;



                if ( currMenuType === 'mobile' ) {

                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();

                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');



                    $('#header #site-header-inner').after($mobileMenu);

                    hasChildMenu.children('ul').hide();

                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');

                    $('.btn-menu').removeClass('active');

                } else {

                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');



                    $desktopMenu.find('.submenu').removeAttr('style');

                    $('#header').find('.nav-wrap').append($desktopMenu);

                    $('.btn-submenu').remove();

                }

            }

        });



        $('.mobile-button').on('click', function() {         

            $('#mainnav-mobi').slideToggle(300);

            $(this).toggleClass('active');

        });



        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {

            $(this).toggleClass('active').next('ul').slideToggle(300);

            e.stopImmediatePropagation()

        });

    };


    var flatContentBox = function(){
        $(window).on('load resize', function(){
            var mode = 'desktop';

            if(matchMedia(' only screen and (max-width: 991px').matches){
                mode = 'mobile';
            }

            $('.flat-content-box').each(function(){
                var margin = $(this).data('margin');

                if( margin ){
                    if(mode == 'desktop') {
                        $(this).attr('style','margin:'+ $(this).data('margin'))
                    }else if( mode == 'mobile') {
                        $(this).attr('style','margin' + $(this).data('mobilemargin'))
                    }
                }
            });
        });
    };

    
   	// Dom Ready
	$(function() { 
      searchIcon();
      headerFixed();
      responsiveMenu();
      flatAccordion();
      flatPrice();  
      flatFilterBox(); 
      flatShopSearch();
      topSearch();
      quantityNumber(); 
      flatTabs();
      flatImagePopup();
      flatVideoPopup(); 
      flatEffectDir();
      flatCarouselOwl();
      flatContentBox();
   	});
})(jQuery);