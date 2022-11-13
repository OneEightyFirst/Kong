/* ============================================================ */
/*  GENERAL TROTTLE FUNCTION
/* ============================================================ */
function throttle(func, wait) {
    var context, args, result;
    var timeout = null;
    var previous = 0;

    var later = function() {
        previous = Date.now();
        timeout = null;
        result = func.apply(context, args);

        if (!timeout) {
            context = args = null;
        }
    };

    return function() {
        var now = Date.now();
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout) {
        timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
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
    
/* ========================================================================================== */
/*  TRANSITION ANIMATION SCRIPT FOR NAVIGATION
/* ========================================================================================== */
    function navTransition() {
        if ($(window).width() > 1199) {
            if ($(this).scrollTop() > $('.navbar').outerHeight()) {
                $('.navbar').addClass("top");
            }else{
                $('.navbar').removeClass("top");
            }   
        } else {
            $('.navbar').addClass("top");
        }
    }
    navTransition();
    $(window).on('resize', throttle(navTransition, 500));
    $(window).on('scroll', throttle(navTransition, 500));


/* ========================================================================================== */
/*  UTM PARAMETERS
/*
/*  Pulls and splits the UTM params from the url
/*  and places them in the hidden fields.
/* ========================================================================================== */
    var queryForm = function(settings){
        var self = window.location.toString();
        var querystring = self.split("?");
        if (querystring.length > 1) {
        var pairs = querystring[1].split("&");
        for (i in pairs) {
            var keyval = pairs[i].split("=");
            if (sessionStorage.getItem(keyval[0]) === null) {
            sessionStorage.setItem(keyval[0], decodeURIComponent(keyval[1]));
            }
        }
        }
        var hiddenFields = document.querySelectorAll("input[type=hidden], input[type=text]");
        for (var i=0; i<hiddenFields.length; i++) {
        var param = sessionStorage.getItem(hiddenFields[i].name);
        if (param) document.getElementsByName(hiddenFields[i].name)[0].value = param;
        }
    }
    setTimeout(function(){queryForm();}, 3000);
})(jQuery);

