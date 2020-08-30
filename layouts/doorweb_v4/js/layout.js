jQuery(function($){
$('.dropdown').hover(function(){ 
		$(this).addClass('open');
	});

	$('.dropdown').focus(function(){ 
		$(this).addClass('open');
	});

	$('.dropdown').mouseleave(function(){ 
		$(this).removeClass('open');
	});
	
	$('.act_menu').click(function(){
		$('.total_menu').toggle();
	});
	
	var gMenu = $('div.total_menu');
    var gItem = gMenu.find('>div>ul>li');
    var ggItem = gMenu.find('>div>ul>li>ul>li');
    var lastEvent = null;
    function gMenuToggle(){
        var t = $(this);
        if (t.next('ul').is(':hidden') || t.next('ul').length == 0) {
            gItem.find('>ul').slideUp(200);
            gItem.find('button').removeClass('hover');
            t.next('ul').slideDown(200);
            t.addClass('hover');            
        } else {
        	gItem.find('>ul').slideUp(200);
            gItem.find('button').removeClass('hover');
        
        }; 
    };

    gItem.find('>button').click(gMenuToggle);
    
    var scrollToTop = function() {
		// Get link
		var link = $('#to-top');
		var windowW = window.innerWidth
						|| document.documentElement.clientWidth
						|| document.body.clientWidth;

		$(window).scroll(function() {
			// If the user scrolled a bit (150 pixels) show the link in large resolutions
			if (($(this).scrollTop() > 150) && (windowW > 991)) {
				link.fadeIn(100);
			} else {
				link.fadeOut(100);
			}
		});

		// On click get to top
		link.click(function() {
			$('html, body').animate({scrollTop: 0}, 400);
			return false;
		});
	};
});