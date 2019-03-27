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
	$("#expert1-quiz-btn").click(function() {
		$('#expert1 .quiz').show();
		$(this).hide();
		$("html, body").animate({
			scrollTop: $("#expert1-quiz").offset().top }, {duration: 500,easing: "swing"});
		return false;
	});

	$('#ex1q1 p:nth-child(1)').click(function() {
	// $('#test').click(function() {
		$("#ex1q1 .fb-btn").attr('href','#modal1');
	});

	$('#ex1q2 p:nth-child(2)').click(function() {
	// $('#test').click(function() {
		$("#ex1q2 .fb-btn").attr('href','#modal1');
	});

});
