(function(jQuery){

	// init smooth-scroll
	smoothScroll.init({
		speed: 700, // Integer. How fast to complete the scroll in milliseconds
    	easing: 'easeInOutCubic', // Easing pattern to use
    	updateURL: false
	});

	// sidemenu logic
	window.onscroll = updateSidemenu;
    function updateSidemenu() {
    	// cash elements
    	$sidemenu = $('ul.side-menu');
    	$children = $('ul.side-menu').children();
    	$window = $(window);

    	// declare variables
    	var screenHeight = $window.height(),
	    	screenTop = $window.scrollTop(),
	    	about = $('section#about-me').offset(),
	    	experiences = $('section#experiences').offset(),
	    	abilities = $('section#abilities').offset(),
	    	interests = $('section#interests').offset();
	    	contact = $('section#contact').offset();

	    // remove active from all
    	$sidemenu.children().removeClass('active');

    	// assign active class to correct element
    	if (screenTop < screenHeight){ 
    		$sidemenu.find('li:nth-child(1)').addClass('active') 
    	} else if (screenTop > about.top && screenTop < experiences.top) { 
    		$sidemenu.find('li:nth-child(2)').addClass('active') 
		} else if (screenTop > experiences.top && screenTop < abilities.top) { 
			$sidemenu.find('li:nth-child(3)').addClass('active') 
		} else if (screenTop > abilities.top && screenTop < interests.top) { 
			$sidemenu.find('li:nth-child(4)').addClass('active') 
		} else if (screenTop > interests.top) { 
			$sidemenu.find('li:nth-child(5)').addClass('active') 
		} else if (screenTop > contact.top) { 
			$sidemenu.find('li:nth-child(6)').addClass('active') 
		}
    }
})($);