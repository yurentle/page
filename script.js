$(function() {
    var scrollOffset = 100;
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > scrollOffset) {
            $('body').addClass('scrolled')
        } else {
            $('body').removeClass('scrolled')
        }
    })
})

