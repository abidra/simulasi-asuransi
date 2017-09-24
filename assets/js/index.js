
(function($, window, document) {
    
    $(function() {});

    $("#content-master").steps({
        headerTag: "span",
        bodyTag: "section",
        transitionEffect: "fade",
        autoFocus: true,
    });

    $('#navigator').on('click', '.nav-previous', function () {
        $('#content-master').steps('previous');
        $(this).parent().find('.nav-current').text("0" + ($('#content-master').steps('getCurrentIndex') - (-1)));

        $('.content-section.current').addClass('animated slideInLeft').one('animationend', function () {
            $(this).removeClass('animated slideInLeft')
        });
    });

    $('#navigator').on('click', '.nav-next', function () {

        if ($('#content-master').steps('getCurrentIndex') == 6) {
            return window.location.href = 'report.php';
        }

        $('#content-master').steps('next');
        $(this).parent().find('.nav-current').text("0" + ($('#content-master').steps('getCurrentIndex') - (-1)));

        if ($('#content-master').steps('getCurrentIndex') == 2) {
            $('.jobdesc').text($('.choice-toggle.choice-with-data.selected').data('text'));
        }

        $('.content-section.current').addClass('animated slideInRight').one('animationend', function () {
            $(this).removeClass('animated slideInRight')
        });
    });

    $('.choice-toggle').click(function(e) {

        var element = $(this);
        var others = element.parents('.choice-scope').find('.choice-toggle').not(this);

        e.preventDefault();
        element.find('.choice-toggle-radio')[0].checked = true;
        
        others.removeClass('selected');
        others.find('.glyphicon-ok').remove();

        if (element.hasClass('selected')) {
            return;
        }

        if ($('#content-master').steps('getCurrentIndex') == 2) {
            $('.jobdesc').text(element.data('text'));
        }
            
        element.addClass('selected');
        element.find('.panel-body').prepend(
            $('<span>').addClass('glyphicon glyphicon-ok animated bounceIn')
        );    

    });

})(jQuery, window, document);
