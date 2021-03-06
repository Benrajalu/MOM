/*global jQuery:false */
/*global Modernizr:false */
/*global console:false */
/*global confirm:false */
'use strict';

// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

window.ParsleyValidator.setLocale('fr');

$(".fb-like").each(function(){
    $(this).attr("data-href", document.URL);
})


jQuery(window).load(function () {
	  jQuery("#mainSlider").flexslider({
        controlNav : false,
        slideshowSpeed:5000, 
        animation : 'slide',
        manualControls : '#sliderNav li'
    });

    $('.pop').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

});