$(document).ready(function(){

	var blinking_cursor = $("#animated-cursor");
	function animateCursor(obj){
		if(obj.css("visibility") == "visible"){			
			obj.css("visibility", "hidden");
		}
		else{
			obj.css("visibility", "visible");
		}
	}
	setInterval(animateCursor.bind(null, blinking_cursor), 500);


    /*$(window).scroll( function(){
        $('.fadein').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
            
        }); 
    });*/

	var loading_dots = $("#loading-dots");
	var counter = 0;
	function animateDots(obj){
		var html;
		switch(counter%4) {
			case 1:
				html = ".&nbsp;&nbsp;";
				break;
			case 2:
				html = "..&nbsp;";
				break;
			case 3:
				html = "...";
				break;
			default:
				html = "&nbsp;&nbsp;&nbsp;";
		    	break;
		} 
		counter++;
		
		obj.html(html);
	}
	setInterval(animateDots.bind(null, loading_dots), 500);

});