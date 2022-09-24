$(document).ready(function() {

	$(".popup-me_1").click(function(){

		pop_init_1( "Era l’asta verticale in legno che veniva infissa a terra e sorreggeva gli altri elementi che componevano lo strumento. L'archeologo Della Corte stima la lunghezza dell’asta in sei piedi, pari a 1,78 metri, a cui va aggiunta la lunghezza del puntale che porta la lunghezza totale a 2,04 metri." );

	});

});

function pop_init_1( my_content ) {

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