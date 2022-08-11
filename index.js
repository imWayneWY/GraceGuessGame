var goal = Math.floor((Math.random() * 100)) + 1;;
var userGuess;
var userHasWon = false;
/**
 * Take user's guess and return user result if
 * he/she is right or not
 * @param {number} n from 1 to 100
 * @output {string} result
 */

function guess (n) {
	if (n === "" || isNaN(n)) {
		return "Hey! That's not a 1 to 100 number!"
	}
	var num = parseInt(n);
	if (num > 100 || num < 1) {
		return "Hey! That's not a 1 to 100 number!";
	}
	if (goal < num) {
		return "The number is smaller than this.";
	}
	if (goal > num) {
		return "The number is larger than this.";
	}
	if (goal === num) {
		userHasWon = true;
		return "Congratulations! You got it right!";
	}
}

function getUserInput() {
	var input = document.getElementById("input");
	console.log("input is:", input.value);
	userGuess = input.value;
}

function clearInput() {
	document.getElementById("input").value = "";
}

function verifyUserInput() {
	var message = guess(userGuess);
	clearInput();
	document.getElementById("message").innerText = message;
	if (userHasWon) {
		document.getElementById("input").style.display = "none";
		document.getElementById("button").style.display = "none";
		document.getElementById("new-game").style.display = "block";
	}
}

function newGame() {
	goal = Math.floor((Math.random() * 100)) + 1;
	document.getElementById("heihei").innerText=goal;
	document.getElementById("message").innerText="Try to guess the number from 1 to 100!";
	document.getElementById("new-game").style.display = "none";
	document.getElementById("input").style.display = "block";
	document.getElementById("button").style.display = "block";
	userHasWon = false;
}

function listenToUserEnter(event) {
	if (event.code === "Enter") {
		userGuess = document.getElementById("input").value;
		verifyUserInput();
	}
}

document.getElementById("heihei").innerText=goal;

document.body.addEventListener("keydown", listenToUserEnter);

document.getElementById("input").addEventListener("change", getUserInput);
document.getElementById("button").addEventListener("click", verifyUserInput);
document.getElementById("new-game").addEventListener("click", newGame);


// todo: improvement
/*
console.log(guess(92)); // Your number is a little smaller than the answer
console.log(guess("95")); // Your number is a little bigger than the answer
console.log(guess(2)); // Your number is too smaller than the answer // less than 10, we use a little
*/

