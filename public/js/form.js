$(document).ready(function(){

	$('#name').on('focus', (e) => {
		$('#name').removeClass("form-error");
	});

	$('#email').on('focus', (e) => {
		$('#email').removeClass("form-error");
	});

	$('#message').on('focus', (e) => {
		$('#message').removeClass("form-error");
	});

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

		if(name == ''){
			$('#name').addClass("form-error");
			return;
		}
		if(email == ''){
			$('#email').addClass("form-error");
			return;
		}
		if(message == ''){
			$('#message').addClass("form-error");
			return;
		}

		$.post('/email', form_data, function(){
			console.log('Form submitted');
		});

		$('#name').val('');
		$('#email').val('');
		$('#message').val('');

		$('#email-toast').toast({
			delay: 5000
		});
		$('#email-toast').toast('show');
		//form.reset();
	});
});