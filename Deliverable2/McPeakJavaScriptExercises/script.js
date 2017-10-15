
//Exercise 1:

var user = prompt ("please enter your number", "5");

var total = 0;
for (var x = 1; x <= user; x++) {
	total = total + x;
}
console.log("the total is: " + total); 

//Exercise 2:

let string_of_all_the_words = " ";
do {
}
while (prompt("do you want to play?")!="yes");
do {
	string_of_all_the_words += " " + prompt("Enter a word");
}
while (prompt ("do you want to play again?") != "no");
console.log(string_of_all_the_words);

//exercise 3:

let question = "Would you like to print your name"
let exclamation = ""
let name = prompt("What is your name?")
while(prompt(question)=="yes") {
	console.log("Hello. My name is " + name + exclamation);
	question = "Would you like to print your name again?"
	exclamation += "!";
}
//exercise 4:

let answer = ""
while(answer != "evening"){
 answer = prompt("What time of day is it?");
if (answer == "morning"){
	console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
}
if(answer == "noon"){
	console.log("Since it is noon, you should eat lunch. We suggest a salad");
}
if(answer == "evening"){
	console.log("Since it is evening, you should eat dinner. We suggest chicken and rice.");
}
}