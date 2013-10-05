$( document ).ready(function() {
		var vimeoID = "73872367"; // specify Vimeo video ID to be played
		var width = "100%"; // define WIDTH of Vimeo video canvas
		var height = "600px";	 // define HEIGHT of Vimeo video canvas
		var image = "./img/cover.png"; // path of your video placeholder image
		var vimeoColor = "c22527"; // specify the color of the video controls
		var playButtonColor= "c22527"; // set the background color of play button
		var vimeoBgColor = "000000"; // set the background color of Vimeo player

		$('#vimeoEmbedder').html("<div id=\"video\" vimeo-color="+ vimeoColor +" vimeo-id="+ vimeoID +"><div class=\"video-container\" style=\"width:"+ width +"; height:"+ height +"; background-color:#"+ vimeoBgColor +";\"><span class=\"play\"><span style=\"background-color:#"+ playButtonColor +";\"></span></span> <img alt=\"Play\" src="+ image +" class=\"placeholder\"></div></div>"); // Get the HTML contents of the video player
});


$(document).ready(function() { vimeoEmbedder(); }); // Initiate the plugin