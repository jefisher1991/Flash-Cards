
var inquirer = require("inquirer"); 




function ClozeCard (text, cloze) {
	this.text=text; 
	this.cloze = cloze; 

	this.partial = function () {
		var totalString = this.text; 
		var prompt = totalString.replace (this.cloze, "..."); 
		return prompt; 
	}
	this.fullText = function () {
		return this.text; 
	}
}

var flashCards = []; 

// defining the function
var getFlashcards = function (){

	inquirer.prompt ({
		name: "continue",
		message: " Would you like to add a flashCard?"
	}).then(function (data){
		if (data.continue.toLowerCase() === "yes") {
			inquirer.prompt([{
				name: "fullText", 
				message: "What is the Full Text?"
			}, {
				name: "clozeText", 
				message: "What is the Cloze Text?"
			}]).then(function(data) {
				var mango = new ClozeCard(data.fullText, data.clozeText);
				flashCards.push(mango); 
				console.log(mango.fullText());
				console.log(mango.partial());
				// recursion
				getFlashcards(); 
			});
		} else {
			return;
		}
	})
		
}



// calling the function
getFlashcards();































