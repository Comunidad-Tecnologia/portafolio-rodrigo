function load_content(element,name){
	load_grid();
	$("#content").load("pages/"+name,function(){
		load_grid();
		remove_lateral_color();
		$(element).addClass('light-blue-text accent-4');
	});
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
		$(value).removeClass('light-blue-text');
		$(value).removeClass('accent-4');
	});
}
