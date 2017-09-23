
(function($, window, document) {
    
    $(function() {});

    $("#content-master").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true
    });

    $('.choice-toggle').click(function(e) {

        var element = $(this);
        var others = element.parents('.choice-scope').find('.choice-toggle').not(this);

        console.log(others);

        e.preventDefault();
        element.find('.choice-toggle-radio')[0].checked = true;
        
        others.removeClass('selected');
        others.find('.glyphicon-ok').remove();

        if (element.hasClass('selected')) {
            return;
        }
            
        element.addClass('selected');
        element.find('.panel-body').prepend(
            $('<span>').addClass('glyphicon glyphicon-ok animated bounceIn')
        );    

    });
});
