$('#contactForm').submit(function(event) {
	event.preventDefault();
	$(this)
		.get(0)
		.reset();
	return alertify.success('Message sent');
});

// $( "#btnSubmit" ).click(function(ev) {

//   $( "#target" ).submit();
// });
