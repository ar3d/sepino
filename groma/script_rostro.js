$(document).ready(function() {

	$(".popup-me_4").click(function(){

		pop_init_4( "Era una robusta mensola con le estremità a cilindro: una per ricevere il perno girevole della stelletta, l’altra per l’innesto, anch’esso girevole, dell’asta verticale. La parte centrale del rostro era fatta di legno, mentre le due estremità cilindriche erano metalliche. La distanza orizzontale dal centro della croce all’asta del sostegno verticale è stata calcolata da Della Corte in 23,5 cm. Il rostro permetteva da un lato di evitare l'ingombro del ferramentum durante le operazioni di allineamento, e dall'altro facilitava le operazioni per centrare lo strumento su un punto individuato a terra, l'umbilicus soli. Quest'ultima operazione avveniva attraverso un quinto filo a piombo che veniva sospeso attraverso un gancio posizionato in asse con il perno della groma." );

	});

});

function pop_init_4( my_content ) {

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