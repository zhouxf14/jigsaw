$(document).ready(function(){
    $('.scrollspy').scrollSpy({
    	scrollOffset: 70
    });
	$('.tabs').tabs();
	$("#e1").click(function() {
		$('#intro').hide();
		$('#select').hide();
		$('#expert1').show();
	});
	$("#e2").click(function() {
		$('#intro').hide();
		$('#select').hide();
		$('#expert2').show();
	});
});
