var countDown = function() {
    var before = '<div class="square"><div class="numb">',
        text = '</div><div class="text">';
        if ($().countdown) {
            $(".countdown").countdown('2018/6/22', function(event) {
              $(this).html(event.strftime(before + '%D' + text + 'Days</div></div>' + before + '%H' + text + 'Hours</div></div>' + before + '%M' + text + 'Minutes</div></div>' + before + '%S' + text + 'Seconds</div>'));
            });
        }      
};


$(function() {
    
    countDown();
     });
})(jQuery);