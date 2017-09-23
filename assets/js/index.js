
(function($, window, document) {
    
    $(function() {});


    $('.choice-toggle').click(function(e) {
        var element = $(this);

        e.preventDefault();

        if (element.hasClass('selected')) {
            element.removeClass('selected');
            element.find('.glyphicon-ok').remove();
        } else {
            element.addClass('selected');
            element.find('.panel-body').prepend(
                $('<span>').addClass('glyphicon glyphicon-ok animated bounceIn')
            );
        }

    });

}(window.jQuery, window, document));
