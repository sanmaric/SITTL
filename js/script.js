jQuery(document).ready(function(){
  "use strict";


  // TEAM SLIDER
$('.team-carousel').carouFredSel({
		responsive:true,
		width:'100%',
		circular:true,
		prev:'#team-prev',
		next:'#team-next',
		scroll:{
			items:1,
			duration:500,
			pauseOnHover: true
		},
		auto: true,
		items: {
			visible:{
				min:1,
				max:4
			},
			height:"variable"
		}
	});


	// FIX HEADER
	$(window).scroll(function(){
   if($(this).scrollTop() > 110){
   	$('header').addClass('orange_head');
   } else {
   	$('header').removeClass('orange_head');
   }	
	});

});
	var headerHeight = $('header').outerHeight();

	 $('.intro-section').click(function(e){
	 	var linkHref = $(this).attr('href');
	 	$('htm, body').animate({
	 		scrollTop:$(linkHref).offset().top - headerHeight
	 	});
	 	e.preventDefault();
	 });











