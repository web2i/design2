//jquery

$(function(){
	setInterval(function(){
		$(".slideshow ul").animate({opacity : 0.6},800, function(){
			$(this).animate({marginLeft:0,opacity:1},800).find("li:last").after($(this).find("li:first"));

		} )
	}, 7000);
});