"use strict";

var myFunc = function(){

	var randomVideo = function(){
		if ( $('.video_container').length > 0 ) {
			$('.video_container').removeClass('_hide');
			var count = $('.video_container iframe').length;
			var random = Math.floor(Math.random()*count);
			$(".video_container iframe").eq(random).show();
		}
	}

	var player = function(){
		$('.btn__play').click(function() {
			if ( $(this).hasClass('act') ) {
				$(this).removeClass('act');
				document.getElementById('player').pause();
			} else {
				$(this).addClass('act');
				document.getElementById('player').play();
			}
		});
	}

	var heightFix = function(){
		var h = window.innerHeight;
		$('.loader').css('min-height',h+'px');
		$('.container').css('min-height',h+'px');
	}	 

	var afterLoader = function(){
		$('.loader').hide();
		$('.loader_bg').hide();
		$('.container').removeClass('_hide');
		$('.container__bg').removeClass('_hide');
		if ( $('.monatik_img').length > 0 ) {
			$('.monatik_img').removeClass('_hide');
		} 
		randomVideo();
	}

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
		        	afterLoader();
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
				afterLoader();
			}			
		}, 7000);
		
	}

	$(document).ready(function(){
		heightFix();
		player();
	});

	$(window).resize(function(){
		heightFix();
	});

	$(window).load(function(){
		anim();
		animText();
	});

}

myFunc();