const form = document.getElementById('form');
const username = document.getElementById('username');
const noControl = document.getElementById('noControl');
const postalCode = document.getElementById('postalCode');
const date= document.getElementById('date');

const postalRegex = /^77[0|9][0-9][0-9]/;
const dateRegex = /^(?:(?:31(\/|de|\.)(?:0?[13578]|1[02]|(?:enero|febrero|marzo|julio|agosto|noviembre|diciembre)))\1|(?:(?:29|30)(\/|de|\.)(?:0?[1,3-9]|1[0-2]|(?:Enero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|de|\.)(?:(?:0?[1-9]|(?:ENERO|FFEBRERO|MARZO|ABRIL|MAYO|JNIO|JULIO|AGOSTO|SEPTIEMBRE|OCTUBRE|NOVIEMBRE|DICIEMBRE))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;


function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const controlValue = noControl.value.trim();
	const postalCodeValue = postalCode.value.trim();
	const dateValue = date.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
		return false;
	} else {
		setSuccessFor(username);
		localStorage["username"] = username;
	}
	
	if(controlValue === '') {
		setErrorFor(noControl, 'Control number cannot be blank');
		return false;
	} else {
		setSuccessFor(noControl);
		localStorage["noContro"] = noControl;
	}
	
	if(postalCodeValue === '' || postalRegex.test(postalCodeValue) == false) {
		setErrorFor(postalCode, 'Not a valid postal code');
		return false;
	} else {

		setSuccessFor(postalCode);
		localStorage["postalCode"]= postalCode;
	}
	
	if(dateValue === '' || dateRegex.test(dateValue) == false) {
		setErrorFor(date, 'Date cannot be blank');
		return false;
	} 
		else{
		setSuccessFor(date);
		localStorage["date"]= date;
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	