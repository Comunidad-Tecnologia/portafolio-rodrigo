function load_content(element,name){
	$("#content").load("pages/"+name);
	load_grid();
	remove_lateral_color();
	$(element).addClass('light-blue-text accent-4');
}

function load_grid(){
	$(document).ready(function(){
		$('.grid').masonry({
			itemSelector:".card",
			columnWidth: 380
		});
	});

}

function remove_lateral_color(){
	$.each($('#menu li a'),function(key,value){
		console.log(value);
		$(value).removeClass('light-blue-text');
		$(value).removeClass('accent-4');
	});
}