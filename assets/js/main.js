$(document).ready(function(){
	$(window).scroll(function(event) {
		var animate= $(window).scrollTop();
		console.log(animate);

		if (animate>220) {
			$(".navbar_change").css({
        background:'black',
        width:'100%',
        height:'57px',
        position:'fixed',
        top:'0px',

			});
		}
		if (animate==0) {
			$(".navbar_change").css({
				background:'transparent',
			});
		}
	});
});
