var flatAccordion = function() {
    var speed= {duration: 600};
    $('.toggle-content').hide();
    $('.flat-accordion .toggle-title.active').siblings('.toggle-content').show();

    $('.flat-accordion .toggle-title').on('click', function(){
      if(!$(this).is('.active')) {
        $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(speed);
        $(this).toggleClass('active');
        $(this).next().slideToggle(speed);
      }else {
        $(this).toggleClass('active');
        $(this).next().slideToggle(speed);
      }
    });
  };

  $(function(){
    
  })