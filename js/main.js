$('#contactForm').submit(function(event) {
	event.preventDefault();
	$(this)
		.get(0)
		.reset();
	alertify.set('notifier', 'position', 'top-center');
	alertify.success('Message sent');
});

// $( "#btnSubmit" ).click(function(ev) {

//   $( "#target" ).submit();
// });
