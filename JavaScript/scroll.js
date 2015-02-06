$(document).ready(function(){
	$('div:not(.dont-fucking-scroll-bitch) a').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 350, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
