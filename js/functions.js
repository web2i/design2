//jquery

/*** Definition des dimensions des images du slider & animation des textes ***/

$(window).load(function() {
  	var largeur = $(heading).width();
    $(".heading_pic").css('width', largeur);
    $(".about_text").stop().animate({marginTop:0 + "px",opacity:1},1000);
	var divHeight;
	var obj = document.getElementById('numbers');
	if(obj.offsetHeight)          {divHeight=obj.offsetHeight;}
	else if(obj.style.pixelHeight){divHeight=obj.style.pixelHeight;}
	var obj2 = document.getElementById('about');
	obj2.style.height = divHeight+"px";
	
});

/*** Mise en route du slider ***/

$(function(){
	setInterval(function(){
      	var largeur = $(heading).width();
		$(".heading_pic").css('width', largeur);
      	window.onresize = function(){ 
      		largeur = $(heading).width();
      		$(".heading_pic").css('width', largeur);
      	}

        $("#heading ul").animate({marginLeft:-largeur},800,function(){
        	$(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
        })
    }, 4000);
});

/*** Animation de la liste des membres ***/

$(function(){
	$("#team").mouseover( function() {		
		$(".team_list").stop().animate({marginLeft:0 + "px",opacity:1},600);
	});
	
});

/*** Création du bouton top ***/

$(document).ready(function(){
   $('body').append('<a href="#top" class="top_link" title="Revenir en haut de page"><img style="width:30px;height:30px;" src="ressources/top_arrow.png"/></a>');
   $('.top_link').css({
	'position'				:	'fixed',
	'right'					:	'20px',
	'bottom'				:	'50px',
	'display'				:	'none',
	'padding'				:	'20px',
	'background'			:	'#fff',
	'-moz-border-radius'	:	'40px',
	'-webkit-border-radius'	:	'40px',
	'border-radius'			:	'40px',
	'opacity'				:	'0.9',
	'z-index'				:	'2000',
	'width'					: 	'30',
	'height'				: 	'30',
	'border'				: 	'1px solid lightgrey'
});

   });

$(window).scroll(function(){
	var divHeight;
	var obj = document.getElementById('numbers');
	if(obj.offsetHeight)          {divHeight=obj.offsetHeight;}
	else if(obj.style.pixelHeight){divHeight=obj.style.pixelHeight;}
	var obj2 = document.getElementById('about');
	obj2.style.height = divHeight+"px";
	
	posScroll = $(document).scrollTop();
	if(posScroll >=550) 
		$('.top_link').fadeIn(600);
	else
		$('.top_link').fadeOut(600);
});