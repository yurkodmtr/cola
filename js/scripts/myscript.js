"use strict";

var myFunc = function(){

	var anim = function(){
		var animation = setInterval( moveSprite,50);
		var index=0;
		function moveSprite(){		 
			var nextSlide = index+1;
			$('.anim img:nth-child('+index+')').hide();	   
			$('.anim img:nth-child('+nextSlide+')').show();					
		    index++;
		    if(index === 150){
		        clearInterval(animation);
		        //$('.loader').fadeOut();
		    }
		}
	}

	$(document).ready(function(){

	});

	$(window).load(function(){
		anim();
	});

}

myFunc();