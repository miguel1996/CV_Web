$(document).ready(function(){

	const name = $('#name');
	const email = $('#email');
	const message = $('#message');
	const emailToast = $('#email-toast');

	name.on('focus', (e) => {
		name.removeClass("form-error");
	});

	email.on('focus', (e) => {
		email.removeClass("form-error");
	});

	message.on('focus', (e) => {
		message.removeClass("form-error");
	});

	$('#custom-contact-form').on('submit', (e) => {
		e.preventDefault();

		const nameVal = name.val().trim();
		const emailVal = email.val().trim();
		const messageVal = message.val().trim();

		const form_data = {
			nameVal,
			emailVal,
			messageVal
		};

		if(nameVal == ''){
			name.addClass("form-error");
			return;
		}
		if(emailVal == ''){
			email.addClass("form-error");
			return;
		}
		if(messageVal == ''){
			message.addClass("form-error");
			return;
		}

		$.post('/email', form_data, function(){
			console.log('Form submitted');
		});

		name.val('');
		email.val('');
		message.val('');

		emailToast.toast({
			autohide: false
		});
		emailToast.toast('show');

		emailToast.animate({'right':'10vh'},1000, (e)=>{
			setTimeout(()=>{
				emailToast.animate({'right':'-50vh'},1000);
			}, 5000);			
		});


	});
});