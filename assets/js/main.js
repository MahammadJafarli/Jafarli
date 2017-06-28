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
		if (animate>660){
			$(".html").css({
				width:'90%',
				transition:'.5s',
			});
			$(".css").css({
				width:'90%',
				transition:'.6s',
			});
			$(".js").css({
				width:'70%',
				transition:'.7s',
			});
			$(".php").css({
				width:'75%',
				transition:'.8s',
			});
			$(".ajax").css({
				width:'50%',
				transition:'.9s',
			});
			$(".pascal").css({
				width:'50%',
				transition:'1s',
			});
		}
		if(animate>1450){
			$(".hear_title").css({
				transform: 'translateX(0px)',
	      transition:'1s',
			});
			$(".hear_text").css({
				transform: 'translateX(0px)',
	      transition:'1s',
			});
			$(".hear_btn").css({
				transform: 'translatey(0px)',
	      transition:'1s',
			});
		}
	});
});
