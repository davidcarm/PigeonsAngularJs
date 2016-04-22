$(document).ready(function(){
	
	// menu bij scrollen
	$(window).scroll(function() {
		if ($(document).scrollTop() > 100) {
			$('#nav').addClass('fixed');
		}
		else {
			$('#nav').removeClass('fixed');
		}
	});
	
	// menu voor mobile devices
	$(".show-menu").click(function(){
		$("#menu").slideToggle(200);
	});	
	$(window).resize(function() {
		if($(window).width() > 760) 
			$('#menu').show();
	});
	
	// springende quicklinks
	var counterLink = 0;
	
	$(document.body).on("mouseenter",".icon div",function(){
		if (counterLink==0) {
			$(this).effect("bounce", { direction: 'up', distance: 10, times: 1 });
			counterLink=1;
		}
	});
	$(document.body).on("mouseleave",".icon div",function(){
		counterLink=0;
	});
	
	// springende pedigree en result button
	var counterButton = 0;

	$(document.body).on("mouseenter",".pedigreeButton",function(){
		if (counterButton==0) {
			$(this).effect("bounce", { direction: 'up', distance: 10, times: 1 });
			counterButton=1;
		}
	});
	$(document.body).on("mouseleave",".pedigreeButton",function(){
		counterButton=0;
	});
});