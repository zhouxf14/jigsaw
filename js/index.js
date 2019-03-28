$(document).ready(function(){
	var h=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;
	$("#select").css("height",h);

	var expert1 = 0;
	var expert2 = 0;

    $('.scrollspy').scrollSpy({
    	scrollOffset: 90
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
		$("#ex1q1 .fb-btn").attr('href','#modal1-1');
		expert1 = expert1 + 1;
		if (expert1 >= 7) {
			// console.log($('#modal7-1 .btn-flat').attr('href'));
			$('#modal7-1 .btn-flat').attr('href', '#quiz-finish');
			$('#modal7-1 .btn-flat').addClass('modal-trigger');
		}
	});

	$('#ex1q1 p:nth-child(2)').click(function() {
		$("#ex1q1 .fb-btn").attr('href','#wrong-fb');
	});

	$('#ex1q1 p:nth-child(3)').click(function() {
		$("#ex1q1 .fb-btn").attr('href','#wrong-fb');
	});

	$('#modal1-1 .btn-flat').click(function() {
		$('#ex1q1 .fb-btn').hide();
		$('#ex1q1 .check-icon').show();
		
	});

	$('#ex1q2 p:nth-child(2)').click(function() {
		$("#ex1q2 .fb-btn").attr('href','#modal2-1');
		expert1 = expert1 + 1;
		if (expert1 >= 7) {
			// console.log($('#modal7-1 .btn-flat').attr('href'));
			$('#modal7-1 .btn-flat').attr('href', '#quiz-finish');
			$('#modal7-1 .btn-flat').addClass('modal-trigger');
		}
	});

	$('#ex1q2 p:nth-child(1)').click(function() {
		$("#ex1q2 .fb-btn").attr('href','#wrong-fb');
	});

	$('#ex1q2 p:nth-child(3)').click(function() {
		$("#ex1q2 .fb-btn").attr('href','#wrong-fb');
	});

	$('#modal2-1 .btn-flat').click(function() {
		$('#ex1q2 .fb-btn').hide();
		$('#ex1q2 .check-icon').show();
		
	});

	$('#ex1q3 p:nth-child(1)').click(function() {
		$("#ex1q3 .fb-btn").attr('href','#modal3-1');
		expert1 = expert1 + 1;
		if (expert1 >= 7) {
			// console.log($('#modal7-1 .btn-flat').attr('href'));
			$('#modal7-1 .btn-flat').attr('href', '#quiz-finish');
			$('#modal7-1 .btn-flat').addClass('modal-trigger');
		}
	});

	$('#ex1q3 p:nth-child(2)').click(function() {
		$("#ex1q3 .fb-btn").attr('href','#wrong-fb');
	});

	$('#ex1q3 p:nth-child(3)').click(function() {
		$("#ex1q3 .fb-btn").attr('href','#wrong-fb');
	});

	$('#modal3-1 .btn-flat').click(function() {
		$('#ex1q3 .fb-btn').hide();
		$('#ex1q3 .check-icon').show();
		
	});

	$('#ex1q4 p:nth-child(2)').click(function() {
		$("#ex1q4 .fb-btn").attr('href','#modal4-1');
		expert1 = expert1 + 1;
		if (expert1 >= 7) {
			// console.log($('#modal7-1 .btn-flat').attr('href'));
			$('#modal7-1 .btn-flat').attr('href', '#quiz-finish');
			$('#modal7-1 .btn-flat').addClass('modal-trigger');
		}
	});

	$('#ex1q4 p:nth-child(1)').click(function() {
		$("#ex1q4 .fb-btn").attr('href','#wrong-fb');
	});

	$('#modal4-1 .btn-flat').click(function() {
		$('#ex1q4 .fb-btn').hide();
		$('#ex1q4 .check-icon').show();
		
	});

	$('#ex1q5 p:nth-child(2)').click(function() {
		$("#ex1q5 .fb-btn").attr('href','#modal5-1');
		expert1 = expert1 + 1;
		if (expert1 >= 7) {
			// console.log($('#modal7-1 .btn-flat').attr('href'));
			$('#modal7-1 .btn-flat').attr('href', '#quiz-finish');
			$('#modal7-1 .btn-flat').addClass('modal-trigger');
		}
	});

	$('#ex1q5 p:nth-child(1)').click(function() {
		$("#ex1q5 .fb-btn").attr('href','#wrong-fb');
	});

	$('#modal5-1 .btn-flat').click(function() {
		$('#ex1q5 .fb-btn').hide();
		$('#ex1q5 .check-icon').show();
		
	});

	$('#ex1q6 p:nth-child(2)').click(function() {
		$("#ex1q6 .fb-btn").attr('href','#modal6-1');
		expert1 = expert1 + 1;
		if (expert1 >= 7) {
			// console.log($('#modal7-1 .btn-flat').attr('href'));
			$('#modal7-1 .btn-flat').attr('href', '#quiz-finish');
			$('#modal7-1 .btn-flat').addClass('modal-trigger');
		}
	});

	$('#ex1q6 p:nth-child(1)').click(function() {
		$("#ex1q6 .fb-btn").attr('href','#wrong-fb');
	});

	$('#ex1q6 p:nth-child(3)').click(function() {
		$("#ex1q6 .fb-btn").attr('href','#wrong-fb');
	});

	$('#modal6-1 .btn-flat').click(function() {
		$('#ex1q6 .fb-btn').hide();
		$('#ex1q6 .check-icon').show();
		
	});

	$('#ex1q7 p:nth-child(1)').click(function() {
		$("#ex1q7 .fb-btn").attr('href','#modal7-1');
		expert1 = expert1 + 1;
		if (expert1 >= 7) {
			// console.log($('#modal7-1 .btn-flat').attr('href'));
			$('#modal7-1 .btn-flat').attr('href', '#quiz-finish');
			$('#modal7-1 .btn-flat').addClass('modal-trigger');
		}
	});

	$('#ex1q7 p:nth-child(2)').click(function() {
		$("#ex1q7 .fb-btn").attr('href','#wrong-fb');
	});

	$('#ex1q7 p:nth-child(3)').click(function() {
		$("#ex1q7 .fb-btn").attr('href','#wrong-fb');
	});

	$('#modal7-1 .btn-flat').click(function() {
		$('#ex1q7 .fb-btn').hide();
		$('#ex1q7 .check-icon').show();
		// console.log($('#modal7-1 .btn-flat').attr('href'));
	});

	$('#quiz-finish .btn-flat').click(function() {
		$("#teach").css("height",h);
		$("#teach").show();
		$('#expert1-teach').show();
	});

	$("#final-quiz-btn").click(function() {
		$("#final-quiz").show();
	});

});
