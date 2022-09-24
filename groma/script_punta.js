$(document).ready(function() {

	$(".popup-me_2").click(function(){

		pop_init_2( "L’estremità inferiore era dotata di punta metallica, con alette di presa, lunga 26 centimetri, da infiggere nel terreno oppure ad lapidem, ossia in un cippo lapideo che gli agrimensori portavano con sé. La presenza di questo puntale riesce a chiarire le espressioni “ferramentum ad lapidem figere” e “ferramentum ad signum ponere” che spesso si ritrovano in letteratura per descrivere l'attività dell'agrimensore." );

	});

});

function pop_init_2( my_content ) {

	var pop_height = 'auto';
        var pop_html = '<div class="pop-bg"></div><div class="pop-wrap"><p class="pop-x">X</p><div class="pop-content"></div></div>';

	$("model-viewer").prepend( pop_html );

	$(".pop-wrap").animate({ "height" : pop_height }, 250).click(function(event){
		event.stopPropagation();
	});

	$(".pop-bg, .pop-x").bind("click", function(event) {
		pop_close();
	});

	$(".pop-content").text(my_content);

}

function pop_close() {
	$(".pop-bg, .pop-wrap").remove();
	$("model-viewer").unbind("click");
}