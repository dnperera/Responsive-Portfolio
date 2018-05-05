$('#contactForm').submit(function(event) {
	console.log($(this).serialize());

	$.ajax({
		method: 'POST',
		url: '//formspree.io/dayannp@gmail.com',
		data: $(this).serialize(),
		datatype: 'json',
	});

	event.preventDefault();
	$(this)
		.get(0)
		.reset();
	alertify.success('Message sent.');
});
