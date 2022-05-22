"use strict";

document.addEventListener('DOMContentLoaded', function(){
const form = document.querySelector('.contacts__form');
form.addEventListener('submit', formSend);

async function formSend(e){
	e.preventDefault();

	let error = formValidate(form);

	let formData =  new FormData(form);

	if(error===0){
		const contacts = document.querySelector('.contacts');
		contacts.classList.add('_sending');
		let response = await fetch('sendmail.php', {
			method: 'POST',
			body: formData
		});
		if(response.ok){
			let result = await response.json();
			alert(result.message);
			formPreview.innerHTML = '';
			form.reset();
			contacts.classList.remove('_sending');
		} else {
			alert('Error');
			contacts.classList.remove('_sending');
		}
	}else{
		alert("Fill in the required fields");
	}

	// sendMail();
	
}

	function formValidate(form){
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		// let formReq = document.querySelectorAll('input[data-validate-field]');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			// if(input.hasAttribute('type', 'tel')){

				if (input.value ===''){
					formAddError(input);
					error++;
				} else if(input.classList.contains('_tel')){
				if(telTest(input)){
					formAddError(input);
					error++;
					// console.log("tel = ");
				}
			// } else if(input.hasAttribute('type', 'email')){
			} else if(input.classList.contains('_email')){
				if(emailTest(input)){
					formAddError(input);
					error++;
					// console.log("email = ");
				}
			} 
				// if (input.value ===''){
				// 	formAddError(input);
				// 	error++;
				// }
			
			
		}
		return error;
		// console.log("formReq length = "+ formReq.length);
	}

	function formAddError(input){
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError(input){
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	function emailTest(input){
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

	function telTest(input){

		// return input.match(/\d/g).length===11;

		// return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

// return /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g;	

		// let phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
		// let digits = input.replace(/\D/g, "");
		// return phoneRe.test(digits);
	}
});
