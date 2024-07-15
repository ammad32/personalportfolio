

(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});
    

	
	
  })(jQuery); 


AOS.init();

 document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('animated-text');
    const text = "Frontend & Backend Developer";
    let index = 0;
    const textColor = "rgba(129,103,169,.6)"; 
	const fontWeight = "600";

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += `<span style="color: ${textColor};font-weight: ${fontWeight};">${text.charAt(index)}</span>`;
            index++;
            setTimeout(typeWriter, 300);
        }
    }

    typeWriter();
});


// Skills animation
let skillsContent = select('.skills-section');
if (skillsContent) {
    new Waypoint({
        element: skillsContent,
        offset: '80%',
        handler: function(direction) {
            let progress = select('.progress', true);
            progress.forEach((el) => {
                el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const serviceBoxes = document.querySelectorAll('.service-box');

    serviceBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.classList.add('hover');
        });

        box.addEventListener('mouseout', () => {
            box.classList.remove('hover');
        });
    });
});



