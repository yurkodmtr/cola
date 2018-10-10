"use strict";

var myFunc = function(){

	var anim = function(){
		var animation = setInterval( moveSprite,50);
		var index=0;
		function moveSprite(){		 
			var nextSlide = index+1;
			$('.anim img:nth-child('+index+')').removeClass('act');	   
			$('.anim img:nth-child('+nextSlide+')').addClass('act');					
		    index++;
		    if(index === 150){
		        clearInterval(animation);
		        if ( $('.anim').is(':visible')) {
		        	$('body').removeClass('body_loader');
		        	$('.loader').hide();
		        }		        
		    }
		}
	}

	var animText = function(){
		$('.anim_text__1').addClass('step_1');
		setTimeout(function(){
			$('.anim_text__1').removeClass('step_1').addClass('step_2');
		}, 1500);
		setTimeout(function(){			
			$('.anim_text__2').addClass('step_1');
		}, 2000);
		setTimeout(function(){			
			$('.anim_text__2').removeClass('step_1').addClass('step_2');
		}, 3500);
		setTimeout(function(){			
			$('.anim_text__3').addClass('step_1');
		}, 4000);
		setTimeout(function(){
			$('.anim_text__3').removeClass('step_1').addClass('step_2');
		}, 5500);
		setTimeout(function(){
			if ( $('.anim_text').is(':visible')) {
				$('body').removeClass('body_loader');
				$('.loader').hide();
			}			
		}, 7000);
		
	}

	$(document).ready(function(){

	});

	$(window).load(function(){
		anim();
		animText();
	});

}

myFunc();