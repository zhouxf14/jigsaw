$(document).ready(function(){

    $('.scrollspy').scrollSpy({
    	scrollOffset: 70
    });
	$('.tabs').tabs();
	$('.modal').modal();
	// $('select').formSelect();

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
	$("#expert1-quiz").click(function() {
		$('#expert1 .quiz').show();
		$(this).hide();
	});
	$('#test').click(function() {
		$("#ex1q1 .btn").attr('href','#modal1');
	});

});
