alert("Hello Visitor!\nWelcome to my page...");

	var name = prompt("Would you be so kind to tell me your name?");

		alert("Greatings " + name + "!");
		alert(name + " \nEnter two numbers, please!");
	
		var Num1 = Number(prompt("First number, please!"));
		var Num2 = Number(prompt("Second number, please!"));
				
function addTwoNumbers(Num1,Num2) {		
		var sum = Num1 + Num2;
		alert("The sum of your two numbers is " + sum);
	
			if (sum > 10) 
					alert ("That is a big number");
			else 
					alert ("That is a small number");
				
					alert(name + " do you want to add two numbers again?");	
			
		var conf = confirm("Click Ok or Cancel");	
			
			if (conf == false) {
							alert("Thank you for your visit " + name)
					return false;
					}		
			for (var conf = true; conf == true; conf++) {
					alert(name + " \nEnter two numbers, please!");
					var Num1 = Number(prompt("First number, please!"));
					var Num2 = Number(prompt("Second number, please!"));
					return addTwoNumbers(Num1, Num2);		 
				}
			}
addTwoNumbers(Num1, Num2);