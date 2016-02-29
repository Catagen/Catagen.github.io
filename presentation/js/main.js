$(document).ready(function() {
		$('#fullpage').fullpage({
				//Navigation
				menu: false,
				navigation: false,
				navigationPosition: 'right',
				showActiveTooltips: false,
				slidesNavigation: false,
				slidesNavPosition: 'bottom',

				//Scrolling
				css3: true,
				scrollingSpeed: 800,
				autoScrolling: true,
				fitToSection: true,
				scrollBar: false,
				easing: 'easeInOutCubic',
				easingcss3: 'ease',
				loopBottom: false,
				loopTop: false,
				loopHorizontal: true,
				continuousVertical: false,
				scrollOverflow: false,
				touchSensitivity: 15,
				normalScrollElementTouchThreshold: 5,
				verticalCentered: true,

				//Accessibility
				keyboardScrolling: true,
				controlArrows: false
		});

		var index = 0;

		$("body").keydown(function(e) {
		  if(e.keyCode == 38) { // up
		  	index = index + 1;
		  	$("." + String(index)).css("opacity", 1);
				$("." + String(index)).addClass("active");
		  }
		  else if(e.keyCode == 40) { // down
		    $("." + String(index)).css("opacity", 0.0001);
				$("." + String(index)).removeClass("active");
		    if (index > 0) {
		    	index = index - 1;
		    }
		  }
		  else if(e.keyCode == 37 || e.keyCode == 39) { // down
		    for (i = 0; i < 100; i++) {
		      $("." + String(i)).css("opacity", 0.0001);
					$("." + String(i)).removeClass("active");
		    }
		    index = 0;
		  }
		  $("#index").text(String(index));
		});

		function on_load() {
			for (i = 0; i < 100; i++) {
		    	$("." + String(i)).css("opacity", 0.0001);
			}
		}

		window.addEventListener("load", on_load);

});
