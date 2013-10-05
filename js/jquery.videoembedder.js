vimeoEmbedder = function(){

  $("#video").each(function(){
    
    var videoObj = $(this),
    videoContainer = $(".video-container", this),
    placeholderImg = videoObj.find(".placeholder"),
    videoColour = "aaaaaa";
  
    if((placeholderImg.attr("height") / placeholderImg.attr("width")) > .57) $(".video-container", this).addClass("fourbythree");
    
    if(videoObj.attr("vimeo-color")) videoColour = videoObj.attr("vimeo-color");
    
    var videoHTML = '<iframe src="http://player.vimeo.com/video/' + videoObj.attr("vimeo-id") + '?title=0&amp;byline=0&amp;portrait=0&amp;color=' + videoColour + '&amp;autoplay=1&amp;api=1" width="'+ placeholderImg.attr("width") +'" height="'+ placeholderImg.attr("height") +'" width="'+ placeholderImg.attr("width") +'" height="'+ placeholderImg.attr("height") +'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
      
    $("#video").on("click", function(e){
      videoContainer.empty().append(videoHTML);
    });

    $(document).on({
      mouseenter: function () {
        $('span', this).css('background-color', '#333');
      },
      mouseleave: function () {
        $('span', this).css('background-color', '#c22527');
      }
    }, ".play");
  
  });
  
  if($("body").hasClass("home")) $("html").addClass("hideScroll");
  else $("html").removeClass("hideScroll");

}