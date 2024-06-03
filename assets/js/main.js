/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			// $window.on('load', function() {

				// $('#two').poptrox({
				// 	caption: function($a) { return $a.next('h3').text(); },
				// 	overlayColor: '#2c2c2c',
				// 	overlayOpacity: 0.85,
				// 	popupCloserText: '',
				// 	popupLoaderText: '',
				// 	selector: '.work-item a.image',
				// 	usePopupCaption: true,
				// 	usePopupDefaultStyling: false,
				// 	usePopupEasyClose: false,
				// 	usePopupNav: true,
				// 	windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				// });

				// $('#research').poptrox({
				// 	caption: function($a) { 
				// 		var parentArticle = $a.parent('article.work-item');
				// 		var h3Text = parentArticle.find('h3').text();
				// 		var pText = parentArticle.find('p').text();
				// 		return '<div class="popup-title">' + $a.next('h3').text() + '</div><div class="popup-description">' + $a.next('h3').next('p').text() + '</div>';
				// 	},			
				// 	overlayColor: '#2c2c2c',
				// 	overlayOpacity: 0.85,
				// 	popupCloserText: '',
				// 	popupLoaderText: '',
				// 	selector: '.work-item a.image',
				// 	usePopupCaption: true,
				// 	usePopupDefaultStyling: false,
				// 	usePopupEasyClose: false,
				// 	usePopupNav: true,
				// 	windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				// });

				// $('#research').poptrox({
				// 	selector: '.work-item a.image',
				// 	popupType: 'inline'
				// });

				// $('#research').poptrox({
				// 	overlayColor: '#2c2c2c',
				// 	overlayOpacity: 0.85,
				// 	popupCloserText: '',
				// 	popupLoaderText: '',
				// 	selector: '.work-item a.image',
				// 	usePopupCaption: false,  // We don't need the default caption handling
				// 	usePopupDefaultStyling: false,
				// 	usePopupEasyClose: false,
				// 	usePopupNav: true,
				// 	windowMargin: (breakpoints.active('<=small') ? 0 : 50),
				// 	popupType: 'inline'  // This tells poptrox to treat href content as inline HTML
				// });

				// $('#work-experience').poptrox({
				// 	caption: function($a) { return $a.next('h3').text(); },
				// 	overlayColor: '#2c2c2c',
				// 	overlayOpacity: 0.85,
				// 	popupCloserText: '',
				// 	popupLoaderText: '',
				// 	selector: '.work-item a.image',
				// 	usePopupCaption: true,
				// 	usePopupDefaultStyling: false,
				// 	usePopupEasyClose: false,
				// 	usePopupNav: true,
				// 	windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				// });

				// $('#past-projects').poptrox({
				// 	caption: function($a) { return $a.next('h3').text(); },
				// 	overlayColor: '#2c2c2c',
				// 	overlayOpacity: 0.85,
				// 	popupCloserText: '',
				// 	popupLoaderText: '',
				// 	selector: '.work-item a.image',
				// 	usePopupCaption: true,
				// 	usePopupDefaultStyling: false,
				// 	usePopupEasyClose: false,
				// 	usePopupNav: true,
				// 	windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				// });



// 			});

})(jQuery);


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("#navbar ul li a");
    let clickedNavItem = null; // New: Track the last clicked item

    // New: Event listeners for each nav item
    navItems.forEach((item, index) => {
        item.addEventListener("click", function () {
            // Remove active class from all items
            navItems.forEach((i) => i.classList.remove("active"));
            
            // Set the clicked item to active
            item.classList.add("active");

            // Store the clicked item so we can reference it in the scroll function
            clickedNavItem = item;
            
            // Set a timeout to nullify the clickedNavItem after a duration (e.g., 1 second)
            setTimeout(() => {
                clickedNavItem = null;
            }, 1000);
        });
    });

    function makeActive() {
        // If an item was recently clicked, exit the function
        if (clickedNavItem) return;

		let maxSection;
		let maxVal = 0;
	
		sections.forEach((section) => {
			const rect = section.getBoundingClientRect();
			if (rect.top > 0 && rect.top < window.innerHeight) {
				const visibleHeight = Math.min(rect.bottom, window.innerHeight) - rect.top;
				if (visibleHeight > maxVal) {
					maxVal = visibleHeight;
					maxSection = section;
				}
			}
		});
	
		if (maxSection) {
			navItems.forEach((item, index) => {
				if ("#" + sections[index].id === item.getAttribute('href')) {
					if (maxSection.id === sections[index].id) {
						item.classList.add('active');
					} else {
						item.classList.remove('active');
					}
				}
			});
		}
	}

    window.addEventListener("scroll", makeActive);
});