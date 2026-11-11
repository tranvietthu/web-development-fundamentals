function calculateAge(yearBorn){
	var currentTime = new Date();
	var currentYear = currentTime.getFullYear();
	return currentYear - yearBorn;
}

var name = prompt("enter your name: ")

console.log(name)

var yearBorn = prompt("enter the year you were born: ")

var age;

age = calculateAge(yearBorn)

console.log(name + " is " +age + " years old")

if (age < 18) {
	console.log("you are very young")
}

var message = "";

if (age < 18) {
	message += "you are";
	var i = 0;
	while (i < 5){
		message += " very";
		i++;
	}
	message += " young";
	if ((age > 5) && (age < 10)){
		message = "you are a kid";
	}
} else if (age < 50){
	message = "you are quite young";

} else {
	message = "you are over 50 years old";
}

console.log(message)

var gender = prompt("are you male or female? (male/female): ")
switch (gender) {
	case "male":
		console.log("you are a man");
		break;
	case "female":
		console.log("you are a woman");
		break;
	default:
		console.log("wrong gender input")

}

var isClose = confirm("do you want to close current box")

var message = ""
if (isClose === true) {
	for (var i = 0; i<10; i++){
		message += "bye "
	}
	console.log(message)
}
else {
	console.log("thank you for staying with me")
}