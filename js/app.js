(function($, document, window){

	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		// hero-slider
		$(".hero-slider").flexslider({
			controlNav: false,
			directionNav: true,
			animation: "fade",
			slideshowSpeed:7000,
			prevText:'<i class="fa fa-angle-left"></i>',
			nextText:'<i class="fa fa-angle-right"></i>',
		});
	});


	$(window).load(function(){
		var $container = $('.filterable-items');
	   $(".filterable-nav").show();
		 $(".filter-architecture").hide();
	   $("#spin").hide();
	    $container.isotope({
	        filter: '*',
	        layoutMode: 'fitRows',
	        animationOptions: {
	            duration: 750,
	            easing: 'linear',
	            queue: false
	        }
	    });
		    $('.filterable-nav a').click(function(e){
		    	e.preventDefault();
					console.log(e);
		        $('.filterable-nav .current').removeClass('current');
		        $(this).addClass('current');
		        var selector = $(this).attr('data-filter');
						console.log(selector);
						if(selector==".architecture"||selector==".industrial" || selector==".residential" || selector==".institution"){
							$('.filter-architecture').show();
							$('.all-filter').hide();
							$('.architecture-back').show();
						}
		        $container.isotope({
		            filter: selector,
		            animationOptions: {
		                duration: 750,
		                easing: 'linear',
		                queue: false
		            }
		         });
		         return false;
		    });
	    $('.mobile-filter').change(function(){

	        var selector = $(this).val();
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });
	});
	$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop:hidden').stop(true, true).fadeIn();
    } else {
        $('#toTop').stop(true, true).fadeOut();
    }
		$('filterable-items').fadeIn(300);
	});
	$('#toTop').click(function(e) {
			e.preventDefault();
			$('html, body').animate({scrollTop: 0});
			return false;
	});
})(jQuery, document, window);
