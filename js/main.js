$('#btnSubmit').click(function(event) {
	event.preventDefault();
	var name = $('#name').val();
	var email = $('#email').val();
	var subject = $('#subject').val();
	var message = $('#message').val();

	var dataString =
		'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

	$.ajax({
		type: 'POST',
		url: 'mail-deliver.php',
		data: dataString,
		success: function(response) {
			//function called if your request succeeds
			if (response === 'Message has been sent') {
				$('#name').val('');
				$('#email').val('');
				$('#subject').val('');
				$('#message').val('');
				alertify.success('Message sent!.');
			} else {
				alertify.error(' Message could not send!.');
			}
			console.log('Response from the mail server -->', response);
		},
		error: function(response) {
			//function called if your request failed
			alertify.error(' Message could not send!.');
			console.log('Error -->', response);
			return false;
		},
	});
});

$('.navigation__link').on('click', function(event) {
	//set the navigation toggle checkbox to false to close the navigation .
	$('#navigation-toggle').prop('checked', false);
	//smooth scroll to id
	$('html, body').animate(
		{
			scrollTop: $($(this).attr('href')).offset().top,
		},
		1000,
		'linear'
	);
});

// $('#contactForm').submit(function(event) {
// 	console.log($(this).serialize());
// 	event.preventDefault();
// 	$.ajax({
// 		type: 'POST',
// 		url: $('#contactForm').attr('action'),
// 		data: $(this).serialize(),
// 	})
// 		.done(function(response) {
// 			console.log(response);
// 			//$(this)[0].reset();
// 			$(this)
// 				.get(0)
// 				.reset();
// 			alertify.success('Message sent.');
// 		})
// 		.fail(function(data) {
// 			console.log(data.responseText);
// 		});
// });
//
//https://docs.google.com/document/d/1EJYesfm6VNxEV62fWdm88u5jcpMTTw5imT2ARGNXSe4/edit?usp=sharing
