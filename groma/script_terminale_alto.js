$(document).ready(function() {

	$(".popup-me_3").click(function(){

		pop_init_3( "La parte terminale alta del ferramentum era costituita da un cilindro cavo leggermente rastremato in modo da permettere un fissaggio ottimale sull'asta di legno. L'esterno era tornito e presentava un allargamento su cui andava ad appoggiare il rostro superiore mediante un perno." );

	});

});

function pop_init_3( my_content ) {

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