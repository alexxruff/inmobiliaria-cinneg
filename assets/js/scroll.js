$(document).ready(function(){

	var altura = $('#menu-fixed').offset().top;

	$(window).on('scroll',function(){
		if ($(window).scrollTop() > altura) {
			$('#menu-fixed').css({
				'background': '#ffffff',
				'box-shadow': 'rgba(0,0,0,.3) 0px 0px 15px',
				'transition': '.5s'

			});
		}else{
			$('#menu-fixed').css({
				'background': 'transparent',
				'box-shadow': 'none'


			});
		}


	})

});