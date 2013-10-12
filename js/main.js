$( document ).ready(function() {
		var vimeoID = "73872367"; // specify Vimeo video ID to be played
		var width = "100%"; // define WIDTH of Vimeo video canvas
		var height = "600px";	 // define HEIGHT of Vimeo video canvas
		var image = "./img/cover.png"; // path of your video placeholder image
		var vimeoColor = "c22527"; // specify the color of the video controls
		var playButtonColor= "c22527"; // set the background color of play button
		var vimeoBgColor = "000000"; // set the background color of Vimeo player

		$('#vimeoEmbedder').html("<div id=\"video\" vimeo-color="+ vimeoColor +" vimeo-id="+ vimeoID +"><div class=\"video-container\" style=\"width:"+ width +"; height:"+ height +"; background-color:#"+ vimeoBgColor +";\"><span class=\"play\"><span style=\"background-color:#"+ playButtonColor +";\"></span></span> <img alt=\"Play\" src="+ image +" class=\"placeholder\"></div></div>"); // Get the HTML contents of the video player

		$('a[href^="#"]').on('click',function (e) {
		    e.preventDefault();

				$('html,body').animate({
					scrollTop: $('[name="'+this.hash.substring(1)+'"]').offset().top},
					500
				);
		});

		var total_time = 20000;
		var individual_time = 5000;
		var animation_time = 2000;

		(function animateSpeakers (i) {
			$(".speaker").each(function(j, e){
				window.setTimeout(function() {
					$('img', e).animate({ 'opacity': '0.2' }, animation_time);
					$('.hover-box', e).fadeIn(animation_time);

					window.setTimeout(function() {
						$('img', e).animate({ 'opacity': '1' }, animation_time);
						$('.hover-box', e).fadeOut(animation_time);
					}, individual_time);

				}, Math.random() * total_time);
			});
			window.setTimeout(function() {
				if (--i) animateSpeakers(i);
			}, total_time);
		})(1000);

		// var i = 1;

		// function animateSpeakers () {
		//    setTimeout(function () {
		// 			$('img', e).animate({ 'opacity': '0.2' }, 2000);
		// 			$('.hover-box', e).fadeIn(2000);

		// 			window.setTimeout(function() {
		// 				$('img', e).animate({ 'opacity': '1' }, 2000);
		// 				$('.hover-box', e).fadeOut(2000);
		// 			}, 5000);

		//       i++;
		//       if (i < 10) {
		//          animateSpeakers();
		//       }
		//    }, 3000)
		// }


		// (function animateSpeakers (i) {
		// 	setTimeout(function () {
		// 		var random = Math.round(Math.random()*10);
		// 		var $e = $('.speaker').eq(random);

		// 		$('img', $e).animate({ 'opacity': '0.2' }, 2000);
		// 		$('.hover-box', e).fadeIn(2000);

		// 		window.setTimeout(function() {
		// 			$('img', e).animate({ 'opacity': '1' }, 2000);
		// 			$('.hover-box', e).fadeOut(2000);
		// 		}, 5000);

		// 		if (--i) animateSpeakers(i);
		// 	}, 500)
		// })(1000);

});


$(document).ready(function() { vimeoEmbedder(); }); // Initiate the plugin