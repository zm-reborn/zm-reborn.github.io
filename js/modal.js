$(function() {
		$('.zmr-modal').on('click', function() {
			$('#zmr-img-modal-img').attr('src', $(this).find('img').attr('src'));
			$('#zmr-img-modal').modal('show');
		});		
});
