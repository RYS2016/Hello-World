
function validation () {
	var name = document.getElementById("firstName");
	var sur = document.getElementById("lastName");
	var fac = document.getElementById("facilitator");
	

	 if (name.value.length == 0 || 
	 	sur.value.length == 0 || 
	 	fac.value.length == 0) {
	 	alert("You have to name yourself!!!");
	 	return false;
	 }
	 if (document.myForm.hobby.value == 0) {
		alert ("Please choose your hobby");
		return false;
	}  
	  		if (inputAlphabet (name, "Use alphabets only")) {
	 		if (minimumLength (name, 3, 20)){
	 		if (inputAlphabet (sur, "Use alphabets only")) {
	 		if (minimumLength (sur, 3, 20)){
	 		if (nameDefine (fac, "Only Fazil, Laura and Harsh are permited here!!!")){
	 			return true;
	 		}
	 		}
	 		}
	 		}
	 		}
return false;
}
function inputAlphabet (inputtext, alertMsg) {
	var filter = /^[a-zA-z']+$/;
	if (inputtext.value.match(filter)) {
		return true;
	} else {
		alert ("Only Uppercase and lowercase letters!!!!");
		inputtext.focus();
		return false;
	}
}
function minimumLength (inputtext, min, max){
	var uInput = inputtext.value;
	if (uInput.length >= min && uInput.length <= max) {
		return true;
	} else {
		alert("Give me more than 2 letters!!!!!");
		inputtext.focus();
		return false;
	}
}
function nameDefine (inputname, alertMsg) {
	var yourName = inputname.value;
	if (yourName == "Fazil") {
		return true;
	}else{
		alert("Only Fazil, Laura and Harsh are permited here!!!");
		return false;
	}
}

function valCheckBox() {
		var chks = document.getElementsByName('food');
		var checkCount = 0;
		for (var i = 0; i < chks.length; i++) {
			if (chks[i].checked) {
				checkCount++;
			}
		}
		if (checkCount < 1) {
			alert("Choose atleast one type of the food");
			return false;
		}
		return true;
	}