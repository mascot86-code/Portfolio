$(function () {
	$('[data-scroll]').on('click', function (e) {
		e.preventDefault();
		
		sectionId = $(this).data('scroll');
		sectionOffset = $(sectionId).offset().top;
		
		$('html, body').animate({
			scrollTop: sectionOffset - 50,
		});
	});
	
	$('.resume-btn').on('click', function (e) {
		e.preventDefault();
		
		$('.modal').fadeIn().show();
	});
	
	$('.modal-header-close-link').on('click', function (e) {
		e.preventDefault();
		
		$('.modal').fadeOut(1000).hide();
	});
});
