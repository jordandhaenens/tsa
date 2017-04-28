/*************************
Method 1. This is one option for solving this exercise
*************************/
let wrapper = document.getElementById("wrapper");
let cardRight = document.getElementById("cardRight");
let cardLeft = document.getElementById("cardLeft");

//Randomly generates a direction
let leftOrRight = () => {
	let direction;
	let num = Math.floor(Math.random() * 3) + 1;
	if (num < 2){
		direction = "left";
	} else {
		direction = "right";
	}
	console.log(direction);
	return direction;
}

//Resets classes to .hidden
let resetOutput = () => {

	cardRight.classList.add("hidden");
	cardLeft.classList.add("hidden");
}


wrapper.addEventListener("click", () => {
	// toggle children to .hidden
	resetOutput();
	//unhide the correct div and display in output area
	let direction = leftOrRight();
	if (direction === "left"){
		cardLeft.classList.remove("hidden");
	} else if (direction === "right"){
		cardRight.classList.remove("hidden");
	}
});


/*************************
Method 2. This is a second option for solving this exercise
*************************/

// let wrapper = document.getElementById("wrapper");

// let leftOrRight = () => {
// 	let direction;
// 	let num = Math.floor(Math.random() * 3) + 1;
// 	if (num < 2){
// 		direction = "&laquo;&ndash;&laquo;&ndash;&laquo;";
// 	} else {
// 		direction = "&raquo;&ndash;&raquo;&ndash;&raquo;";
// 	}
// 	console.log(direction);
// 	return direction;
// }

// let resetOutput = () => {
// 	var card = document.getElementById("outputContent");
// 	card.remove();
// }


// wrapper.addEventListener("click", () => {
// 	// remove any children
// 	resetOutput();
// 	//create a child and display in output area
// 	let direction = leftOrRight();
// 	let newDiv = `<div id="outputContent">
// 					<h1 class="direction">${direction}</h1>
// 				 </div>`;
// 	document.getElementById("output").innerHTML = newDiv;
// });

