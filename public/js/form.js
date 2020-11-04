$(document).ready(function(){
	$('#custom-contact-form').on('submit', (e) => {
		e.preventDefault();

		const name = $('#name').val().trim();
		const email = $('#email').val().trim();
		const message = $('#message').val().trim();

		const form_data = {
			name,
			email,
			message
		};

		$.post('/email', form_data, function(){
			console.log('Form submitted');
		});

	});
});