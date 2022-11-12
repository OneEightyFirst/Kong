/* ============================================================ */
/*  FUNCTIONS
/* ============================================================ */

(function($) {
    /* ========================================================================================== */
    /*  (DATA) BACKGROUND IMAGE
    /*
    /*  Finds each "bg-image" data attribute, stores the
    /*  value, and applies it as inline CSS on that element.
    /* ========================================================================================== */
    var $cacheBGElems = $('[data-bg-image], [data-bg-image-sm], [data-bg-image-md], [data-bg-image-lg], [data-bg-image-xl]');
    function setBgImages() {
        $cacheBGElems.each(function() {
            if (window.matchMedia('(min-width: 1200px)').matches && $(this).data('bg-image-xl') !== undefined) {
                $(this).css('background-image', 'url(' + $(this).data('bg-image-xl') + ')');
            } else if (window.matchMedia('(min-width: 992px)').matches && $(this).data('bg-image-lg') !== undefined) {
                $(this).css('background-image', 'url(' + $(this).data('bg-image-lg') + ')');
            } else if (window.matchMedia('(min-width: 768px)').matches && $(this).data('bg-image-md') !== undefined) {
                $(this).css('background-image', 'url(' + $(this).data('bg-image-md') + ')');
            } else if (window.matchMedia('(min-width: 576px)').matches && $(this).data('bg-image-sm') !== undefined) {
                $(this).css('background-image', 'url(' + $(this).data('bg-image-sm') + ')');
            } else if ($(this).data('bg-image') !== undefined) {
                $(this).css('background-image', 'url(' + $(this).data('bg-image') + ')');
            } else {
                $(this).css('background-image', '');
            }
        });
    }
    setBgImages();
    $(window).on('resize', throttle(setBgImages, 500));
})(jQuery);