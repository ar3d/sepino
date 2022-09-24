$(document).ready(function() {

	$(".popup-me_5").click(function(){

		pop_init_5( "Era formata da una croce rotante a quattro braccia perpendicolari di dimensioni uguali. Aveva un’anima di legno con un rivestimento di ferro e dei rinforzi con tasselli di bronzo nella zona centrale, per impedire che il logoramento del legno potesse indurre degli errori nelle misurazioni." );

	});

});

function pop_init_5( my_content ) {

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