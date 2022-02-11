//PERCENTAGE CONVERTER:
//This function helps to convert scores from a test into percentage output.


//These are prompts collecting input from the user:
var name = prompt("What is the participant's name?");
var totalScore = prompt("What is the total achievable score?");
var actualScore = prompt("What is the participant's actual score?");

//formula for calculating percentage score: actualScore/totalScore X 100

result = Math.round(actualScore /  totalScore * 100);

alert(name + "'s" + " Percentage score is: " + result + "%");