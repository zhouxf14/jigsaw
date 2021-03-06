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
	$('.tooltipped').tooltip();
	// $('select').formSelect();

	$(".lo .button").click(function() {
		$('.lo').hide();
		$('.instruction iframe').show();
	})

	$("#e1").click(function() {
		$('#intro').hide();
		$('#select').hide();
		$('#expert1').show();
		$('.i1').show();
	});
	$("#e2").click(function() {
		$('#intro').hide();
		$('#select').hide();
		$('#expert2').show();
		$('.i2').show();
	});
	$("#expert1-quiz-btn").click(function() {
		$('#expert1 .quiz').show();
		$(this).hide();
		$("html, body").animate({
			scrollTop: $("#expert1-quiz").offset().top }, {duration: 500,easing: "swing"});
		return false;
	});

	$("#expert2-quiz-btn").click(function() {
		$('#expert2 .quiz').show();
		$(this).hide();
		$("html, body").animate({
			scrollTop: $("#expert2-quiz").offset().top }, {duration: 500,easing: "swing"});
		return false;
	});

	$('#ex1q1 p:nth-child(1)').click(function(e) {
		$("#ex1q1 .fb-btn").attr('href','#modal1-1');
	});

	$("#ex1q1 .fb-btn").click(function(e) {
		if ($(e.target).is("input"))
			return;
		if($(this).attr('href')=='#modal1-1') {
			expert1 = expert1 + 1;
			console.log(expert1);
			if (expert1 >= 7) {
				// console.log($('#modal7-1 .btn-flat').attr('href'));
				$('#modal1-1 .btn-flat').attr('href', '#quiz-finish');
				$('#modal1-1 .btn-flat').addClass('modal-trigger');
			}
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
		$('#ex1q1 .kc').show();		
	});

	$('#ex1q2 p:nth-child(2)').click(function(e) {
		$("#ex1q2 .fb-btn").attr('href','#modal2-1');
	});

	$("#ex1q2 .fb-btn").click(function(e) {
		if ($(e.target).is("input"))
			return;
		if($(this).attr('href')=='#modal2-1') {
			expert1 = expert1 + 1;
			console.log(expert1);
			if (expert1 >= 7) {
				// console.log($('#modal7-1 .btn-flat').attr('href'));
				$('#modal2-1 .btn-flat').attr('href', '#quiz-finish');
				$('#modal2-1 .btn-flat').addClass('modal-trigger');
			}
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
		$('#ex1q2 .kc').show();	
		
	});

	$('#ex1q3 p:nth-child(1)').click(function(e) {
		$("#ex1q3 .fb-btn").attr('href','#modal3-1');
	});

	$("#ex1q3 .fb-btn").click(function(e) {
		if ($(e.target).is("input"))
			return;
		if($(this).attr('href')=='#modal3-1') {
			expert1 = expert1 + 1;
			console.log(expert1);
			if (expert1 >= 7) {
				// console.log($('#modal7-1 .btn-flat').attr('href'));
				$('#modal3-1 .btn-flat').attr('href', '#quiz-finish');
				$('#modal3-1 .btn-flat').addClass('modal-trigger');
			}
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
		$('#ex1q3 .kc').show();	
	});

	$('#ex1q4 p:nth-child(2)').click(function(e) {
		$("#ex1q4 .fb-btn").attr('href','#modal4-1');
	});

	$("#ex1q4 .fb-btn").click(function(e) {
		if ($(e.target).is("input"))
			return;
		if($(this).attr('href')=='#modal4-1') {
			expert1 = expert1 + 1;
			console.log(expert1);
			if (expert1 >= 7) {
				// console.log($('#modal7-1 .btn-flat').attr('href'));
				$('#modal4-1 .btn-flat').attr('href', '#quiz-finish');
				$('#modal4-1 .btn-flat').addClass('modal-trigger');
			}
		}
	});

	$('#ex1q4 p:nth-child(1)').click(function() {
		$("#ex1q4 .fb-btn").attr('href','#wrong-fb');
	});

	$('#modal4-1 .btn-flat').click(function() {
		$('#ex1q4 .fb-btn').hide();
		$('#ex1q4 .check-icon').show();
		$('#ex1q4 .kc').show();	
	});

	$('#ex1q5 p:nth-child(2)').click(function(e) {
		$("#ex1q5 .fb-btn").attr('href','#modal5-1');
	});

	$("#ex1q5 .fb-btn").click(function(e) {
		if ($(e.target).is("input"))
			return;
		if($(this).attr('href')=='#modal5-1') {
			expert1 = expert1 + 1;
			console.log(expert1);
			if (expert1 >= 7) {
				// console.log($('#modal7-1 .btn-flat').attr('href'));
				$('#modal5-1 .btn-flat').attr('href', '#quiz-finish');
				$('#modal5-1 .btn-flat').addClass('modal-trigger');
			}
		}
	});

	$('#ex1q5 p:nth-child(1)').click(function() {
		$("#ex1q5 .fb-btn").attr('href','#wrong-fb');
	});

	$('#modal5-1 .btn-flat').click(function() {
		$('#ex1q5 .fb-btn').hide();
		$('#ex1q5 .check-icon').show();
		$('#ex1q5 .kc').show();	
	});

	$('#ex1q6 p:nth-child(2)').click(function(e) {
		$("#ex1q6 .fb-btn").attr('href','#modal6-1');
	});

	$("#ex1q6 .fb-btn").click(function(e) {
		if ($(e.target).is("input"))
			return;
		if($(this).attr('href')=='#modal6-1') {
			expert1 = expert1 + 1;
			console.log(expert1);
			if (expert1 >= 7) {
				// console.log($('#modal7-1 .btn-flat').attr('href'));
				$('#modal6-1 .btn-flat').attr('href', '#quiz-finish');
				$('#modal6-1 .btn-flat').addClass('modal-trigger');
			}
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
		$('#ex1q6 .kc').show();	
	});

	$('#ex1q7 p:nth-child(1)').click(function(e) {
		$("#ex1q7 .fb-btn").attr('href','#modal7-1');
	});

	$("#ex1q7 .fb-btn").click(function(e) {
		if ($(e.target).is("input"))
			return;
		if($(this).attr('href')=='#modal7-1') {
			expert1 = expert1 + 1;
			console.log(expert1);
			if (expert1 >= 7) {
				// console.log($('#modal7-1 .btn-flat').attr('href'));
				$('#modal7-1 .btn-flat').attr('href', '#quiz-finish');
				$('#modal7-1 .btn-flat').addClass('modal-trigger');
			}
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
		$('#ex1q7 .kc').show();	
		// console.log($('#modal7-1 .btn-flat').attr('href'));
	});

	$('#ex2q1 p:nth-child(1)').click(function(e) {
		$("#ex2q1 .fb-btn").attr('href','#2modal1-1');
	});

	$('#ex2q1 p:nth-child(2)').click(function() {
		$("#ex2q1 .fb-btn").attr('href','#wrong-fb2');
	});

	$('#ex2q2 p:nth-child(2)').click(function(e) {
		$("#ex2q2 .fb-btn").attr('href','#2modal2-1');
	});

	$('#ex2q2 p:nth-child(1)').click(function() {
		$("#ex2q2 .fb-btn").attr('href','#wrong-fb2');
	});

	$('#ex2q3 p:nth-child(2)').click(function(e) {
		$("#ex2q3 .fb-btn").attr('href','#2modal3-1');
	});

	$('#ex2q3 p:nth-child(1)').click(function() {
		$("#ex2q3 .fb-btn").attr('href','#wrong-fb2');
	});

	$('#ex2q4 p:nth-child(2)').click(function(e) {
		$("#ex2q4 .fb-btn").attr('href','#2modal4-1');
	});

	$('#ex2q4 p:nth-child(1)').click(function() {
		$("#ex2q4 .fb-btn").attr('href','#wrong-fb2');
	});

	$('#ex2q4 p:nth-child(3)').click(function() {
		$("#ex2q4 .fb-btn").attr('href','#wrong-fb2');
	});

	$('#ex2q5 p:nth-child(1)').click(function(e) {
		$("#ex2q5 .fb-btn").attr('href','#2modal5-1');
	});

	$('#ex2q5 p:nth-child(2)').click(function() {
		$("#ex2q5 .fb-btn").attr('href','#wrong-fb2');
	});

	$('#ex2q5 p:nth-child(3)').click(function() {
		$("#ex2q5 .fb-btn").attr('href','#wrong-fb2');
	});

	$('#ex2q6 p:nth-child(2)').click(function(e) {
		$("#ex2q6 .fb-btn").attr('href','#2modal6-1');
	});

	$('#ex2q6 p:nth-child(1)').click(function() {
		$("#ex2q6 .fb-btn").attr('href','#wrong-fb2');
	});

	$('#ex2q7 p:nth-child(1)').click(function(e) {
		$("#ex2q7 .fb-btn").attr('href','#2modal7-1');
	});

	$('#ex2q7 p:nth-child(2)').click(function() {
		$("#ex2q7 .fb-btn").attr('href','#wrong-fb2');
	});

	$('#ex2q8 p:nth-child(2)').click(function(e) {
		$("#ex2q8 .fb-btn").attr('href','#2modal8-1');
	});

	$('#ex2q8 p:nth-child(1)').click(function() {
		$("#ex2q8 .fb-btn").attr('href','#wrong-fb2');
	});

	$("#ex2q1 .fb-btn").click(function(e) {
		if ($(e.target).is("input"))
			return;
		if($(this).attr('href')=='#2modal1-1') {
			expert2 = expert2 + 1;
			console.log(expert2);
			if (expert2 >= 8) {
				// console.log($('#modal7-1 .btn-flat').attr('href'));
				$('#2modal1-1 .btn-flat').attr('href', '#2quiz-finish');
				$('#2modal1-1 .btn-flat').addClass('modal-trigger');
			}
		}
	});

	$("#ex2q2 .fb-btn").click(function(e) {
		if ($(e.target).is("input"))
			return;
		if($(this).attr('href')=='#2modal2-1') {
			expert2 = expert2 + 1;
			console.log(expert2);
			if (expert2 >= 8) {
				// console.log($('#modal7-1 .btn-flat').attr('href'));
				$('#2modal2-1 .btn-flat').attr('href', '#2quiz-finish');
				$('#2modal2-1 .btn-flat').addClass('modal-trigger');
			}
		}
	});

	$("#ex2q3 .fb-btn").click(function(e) {
		if ($(e.target).is("input"))
			return;
		if($(this).attr('href')=='#2modal3-1') {
			expert2 = expert2 + 1;
			console.log(expert2);
			if (expert2 >= 8) {
				// console.log($('#modal7-1 .btn-flat').attr('href'));
				$('#2modal3-1 .btn-flat').attr('href', '#2quiz-finish');
				$('#2modal3-1 .btn-flat').addClass('modal-trigger');
			}
		}
	});

	$("#ex2q4 .fb-btn").click(function(e) {
		if ($(e.target).is("input"))
			return;
		if($(this).attr('href')=='#2modal4-1') {
			expert2 = expert2 + 1;
			console.log(expert2);
			if (expert2 >= 8) {
				// console.log($('#modal7-1 .btn-flat').attr('href'));
				$('#2modal4-1 .btn-flat').attr('href', '#2quiz-finish');
				$('#2modal4-1 .btn-flat').addClass('modal-trigger');
			}
		}
	});

	$("#ex2q5 .fb-btn").click(function(e) {
		if ($(e.target).is("input"))
			return;
		if($(this).attr('href')=='#2modal5-1') {
			expert2 = expert2 + 1;
			console.log(expert2);
			if (expert2 >= 8) {
				// console.log($('#modal7-1 .btn-flat').attr('href'));
				$('#2modal5-1 .btn-flat').attr('href', '#2quiz-finish');
				$('#2modal5-1 .btn-flat').addClass('modal-trigger');
			}
		}
	});

	$("#ex2q6 .fb-btn").click(function(e) {
		if ($(e.target).is("input"))
			return;
		if($(this).attr('href')=='#2modal6-1') {
			expert2 = expert2 + 1;
			console.log(expert2);
			if (expert2 >= 8) {
				// console.log($('#modal7-1 .btn-flat').attr('href'));
				$('#2modal6-1 .btn-flat').attr('href', '#2quiz-finish');
				$('#2modal6-1 .btn-flat').addClass('modal-trigger');
			}
		}
	});

	$("#ex2q7 .fb-btn").click(function(e) {
		if ($(e.target).is("input"))
			return;
		if($(this).attr('href')=='#2modal7-1') {
			expert2 = expert2 + 1;
			console.log(expert2);
			if (expert2 >= 8) {
				// console.log($('#modal7-1 .btn-flat').attr('href'));
				$('#2modal7-1 .btn-flat').attr('href', '#2quiz-finish');
				$('#2modal7-1 .btn-flat').addClass('modal-trigger');
			}
		}
	});

	$("#ex2q8 .fb-btn").click(function(e) {
		if ($(e.target).is("input"))
			return;
		if($(this).attr('href')=='#2modal8-1') {
			expert2 = expert2 + 1;
			console.log(expert2);
			if (expert2 >= 8) {
				// console.log($('#modal7-1 .btn-flat').attr('href'));
				$('#2modal8-1 .btn-flat').attr('href', '#2quiz-finish');
				$('#2modal8-1 .btn-flat').addClass('modal-trigger');
			}
		}
	});
	
	$('#2modal1-1 .btn-flat').click(function() {
		$('#ex2q1 .fb-btn').hide();
		$('#ex2q1 .check-icon').show();
		$('#ex2q1 .kc').show();
		// console.log($('#modal7-1 .btn-flat').attr('href'));
	});

	$('#2modal2-1 .btn-flat').click(function() {
		$('#ex2q2 .fb-btn').hide();
		$('#ex2q2 .check-icon').show();
		$('#ex2q2 .kc').show();
		// console.log($('#modal7-1 .btn-flat').attr('href'));
	});

	$('#2modal3-1 .btn-flat').click(function() {
		$('#ex2q3 .fb-btn').hide();
		$('#ex2q3 .check-icon').show();
		$('#ex2q3 .kc').show();
		// console.log($('#modal7-1 .btn-flat').attr('href'));
	});

	$('#2modal4-1 .btn-flat').click(function() {
		$('#ex2q4 .fb-btn').hide();
		$('#ex2q4 .check-icon').show();
		$('#ex2q4 .kc').show();
		// console.log($('#modal7-1 .btn-flat').attr('href'));
	});

	$('#2modal5-1 .btn-flat').click(function() {
		$('#ex2q5 .fb-btn').hide();
		$('#ex2q5 .check-icon').show();
		$('#ex2q5 .kc').show();
		// console.log($('#modal7-1 .btn-flat').attr('href'));
	});

	$('#2modal6-1 .btn-flat').click(function() {
		$('#ex2q6 .fb-btn').hide();
		$('#ex2q6 .check-icon').show();
		$('#ex2q6 .kc').show();
		// console.log($('#modal7-1 .btn-flat').attr('href'));
	});

	$('#2modal7-1 .btn-flat').click(function() {
		$('#ex2q7 .fb-btn').hide();
		$('#ex2q7 .check-icon').show();
		$('#ex2q7 .kc').show();
		// console.log($('#modal7-1 .btn-flat').attr('href'));
	});

	$('#2modal8-1 .btn-flat').click(function() {
		$('#ex2q8 .fb-btn').hide();
		$('#ex2q8 .check-icon').show();
		$('#ex2q8 .kc').show();
		// console.log($('#modal7-1 .btn-flat').attr('href'));
	});

	$('#quiz-finish .btn-flat').click(function() {
		$("#j02").attr("id", 'j2');
		$("#teach").css("height",h);
		$("#teach").show();
		$("#expert2-teach").hide();
		$('#expert1-teach').show();
	});

	$('#2quiz-finish .btn-flat').click(function() {
		$("#j02").attr("id", 'j2');
		$("#teach").css("height",h);
		$("#teach").show();
		$("#expert1-teach").hide();
		$('#expert2-teach').show();
	});

	$("#2final-quiz-btn").click(function() {
		$("#j03").attr('id', 'j3');
		$("#final-quiz").css("height",h);
		$("#final-quiz").show();
	});

	$("#final-quiz-btn").click(function() {
		$("#j03").attr('id', 'j3');
		$("#final-quiz").css("height",h);
		$("#final-quiz").show();
	});

});
