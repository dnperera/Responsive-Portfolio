$('#contactForm').submit(function(event) {
	console.log($(this).serialize());

	$.ajax({
		type: 'POST',
		url: $('#contactForm').attr('action'),
		data: $(this).serialize(),
	})
		.done(function(response) {
			console.log(response);
			$(this)[0].reset();
			// $(this)
			// 	.get(0)
			// 	.reset();
			alertify.success('Message sent.');
		})
		.fail(function(data) {
			console.log(data.responseText);
		});
});
