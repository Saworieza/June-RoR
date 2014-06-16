$(function() {

	// Variable Declarations

	var fixFlag=0;

	//Twitter Feed Starting

	$("#twitter-box").tweet({

        username: "codepal",

        //join_text: "auto",

        avatar_size: 0,

        count: 1,

        auto_join_text_default: "Sumeet Said: ",

        auto_join_text_ed: "we",

        auto_join_text_ing: "we were",

        auto_join_text_reply: "we replied to",

        auto_join_text_url: "we were checking out",

        loading_text: "loading tweets..."

    });		  

	$('#testimonial-slider').cycle({

     	fx:     'fade', 

	    speed:  'fast', 

	    timeout: 8000

	});	 

	$('#testi-preview-top').cycle({

     	fx:     'fade', 

	    speed:  'fast', 

	    timeout: 8000

	});	 

	$('#project-container').cycle({ 

	    fx:     'fade', 

	    speed:   1000, 

	    timeout: 0, 

	    pager:  '#project-controls'

	});

	/*-- Main Portfolio Slider --*/

	$('.rotate-portfolio-item').roundabout({

	    enableDrag: true,

	    autoplay: true,	

	    autoplayDuration: 6000,		

	    autoplayInitialDelay: 2000,		

		duration: 600

    });	

    /*--- Footer Contact Form ---*/

    $(".but-client").fancybox({

		'padding'			: 0,

		'autoScale'			: false,

		'transitionIn'		: 'none',

		'transitionOut'		: 'none',

		'overlayColor'		: '#000'

	});

    /*--- SCROLL PANE CODE ---*/

    //$('.scroll-pane').jScrollPane({verticalGutter: 25});

    /*--- Case Study Update ---*/
    if($("#project-controls a").length > 1){
	    $("#project-controls a").last().addClass('case-study').html('Case Study');
	}
	

	/*--- Code for Sticky Navigation Bar ---*/	

	$(window).scroll(function() {

		var b = $(window).scrollTop();

	 	//var d = $("#main-nav").offset.top;

	 	//var offset = $(".head-container").offset();

		//$('.top-button').text(curScroll+' '+b+' '+offset.top);

		if(b>=40){

			if(fixFlag==0){

				$('#main-nav').addClass('fix-head');

				$('#main-nav').append('<a class="top-button" href="#">Goto Top</a></li>');

			}

			fixFlag=1;

		}

		else{

			if(fixFlag==1){

				$("#main-nav").removeClass('fix-head');

				$('a.top-button').remove();

			}

			fixFlag=0;

		}		

	});	

	/*--- Top Button Functionality ---*/

	$('.top-button').live('click',function(){		

		$.scrollTo('0px', 800); 

		return false;

	})

});