$(function() {
    smoothScroll(300);
    formCheck();
    $("header h1").fitText(1, {
        minFontSize: '20px',
        maxFontSize: '72px'
    });
    $(".mail-big").fitText(1, {
        minFontSize: '26px',
        maxFontSize: '72px'
    });
});

function smoothScroll(duration) {
    $('a[href^="#"]').on('click', function(event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}
(function($) {
    $.fn.fitText = function(kompressor, options) {
        // Setup options
        var compressor = kompressor || 1,
            settings = $.extend({
                'minFontSize': Number.NEGATIVE_INFINITY,
                'maxFontSize': Number.POSITIVE_INFINITY
            }, options);
        return this.each(function() {
            // Store the object
            var $this = $(this);
            // Resizer() resizes items based on the object width divided by the compressor * 10
            var resizer = function() {
                $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
            };
            // Call once to set.
            resizer();
            // Call on resize. Opera debounces their resize by default.
            $(window).on('resize.fittext orientationchange.fittext', resizer);
        });
    };
})(jQuery);

function formCheck() {
    var formName = $('[type="text"]');
    var formEmail = $('[type="email"]');
    var formMessage = $("textarea");

    $('[type="submit"]').on('click', function(event) {

        if (formName.val().length <= 0 || formEmail.val().length <= 0 || formMessage.val().length <= 0) {
            event.preventDefault();
        } else {
            setTimeout(function() {
                formName.val("");
                formEmail.val("");
                formMessage.val("");
            }, 1000);
        }
    });
}
