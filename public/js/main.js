$(document).ready(function(){

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	if(dd<10) 
	{
	    dd='0'+dd;
	} 
	$(".day").each(function(index, element){
		$(element).text(dd);
	});
	$(".month").each(function(index, element){
		$(element).text(mm);
	});
	$(".year").each(function(index, element){
		$(element).text(yyyy);
	});

	$(window).scroll( function(){
        $('.fade-in').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight()/2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
            
        }); 
    });

    var hello = $("#hello-world");
    var iterator = 0;
    function animateHelloWorld(obj){
		var text = ["<", "H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "/", ">"];
		if(iterator < text.length){
			var previous = hello.text();			
			hello.text(previous + text[iterator]);
		}
		else{
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
			clearInterval(HelloWorld);
		}
		iterator++;
	}
	var HelloWorld = setInterval(animateHelloWorld.bind(null, hello), 80);

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

	let $shadow = $('.bullet');
	/*$(document).on('mousemove', e => {
		 $shadow.each(function(index, element){
			let shadowMax = $(element).height();
			//let shadowMax = 100000000000000;
			let shadowMin = shadowMax * -1;
			let shadowMidPoints = [$(element).offset().left + $(element).width() / 2, $(element).offset().top + $(element).height() / 2];
			let factor = 0.25;
			let shadowX = Math.min(shadowMax, Math.max(shadowMin, shadowMidPoints[0] - e.pageX)) * factor;
		    let shadowY = Math.min(shadowMax, Math.max(shadowMin, shadowMidPoints[1] - e.pageY)) * factor;
		    $(element).css('box-shadow', `${shadowX}px ${shadowY}px 20px 1px white`);
		});	   
	});*/

	$(document).on('mousemove', e => {
		 $shadow.each(function(index, element){
			let factorX = -0.005;
			let factorY = -0.05;	
			/*let factorX = 0.01;
			let factorY = 0.01;*/
			let position = $(element).offset();
			let shadowX = (position.left - e.pageX) * factorX;
			let shadowY = (position.top - e.pageY) * factorY;
		    //$(element).css('box-shadow', `${shadowX}px ${shadowY}px 7px #0056b3`);
		    $(element).css('box-shadow', `${shadowX}px ${shadowY}px 2px #0056b3 inset`);
		});	   
	});

});

