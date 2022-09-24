$(document).ready(function() {

	$(".popup-me_8").click(function(){

		pop_init_8( "Alcuni sostengono che, per evitare confusione, le due coppie di contrappesi, i pondera, che mettevano in tensione i fili, non avessero la stessa forma." );

	});

});

function pop_init_8( my_content ) {

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