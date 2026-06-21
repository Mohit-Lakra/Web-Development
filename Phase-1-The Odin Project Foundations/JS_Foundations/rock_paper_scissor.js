const prompt = require('prompt-sync')();
console.log("Welcome to Rock, Paper, Scissors!");
let message = "1- Rock\n2- Paper\n3- Scissors\n4-Exit";
let points = 0;
let systempoints = 0;
while (true) {
  console.log(message);
  let decision = prompt("Enter your choice (rock, paper, scissors): ");
  let system = Math.floor(Math.random() * 3) + 1;
  if (decision == 1) {
    if (system == 1) {
      console.log("It's a tie!");
      points++;
      systempoints++;
    }
    else if (system == 2) {
      console.log("You lose! Paper beats Rock.");
      systempoints++;
    }
    else {
      console.log("You win! Rock beats Scissors.");
      points++;
    }
  }
  else if (decision == 2) {
    if (system == 1) {
      console.log("You win! Paper beats Rock.");
      points++;
    }
    else if (system == 2) {
      console.log("It's a tie!");
      points++;
      systempoints++;
    }
    else {
      console.log("You lose! Scissors beats Paper.");
      systempoints++;
    }
  }
  else if (decision == 3) {
    if (system == 1) {
      console.log("You lose! Rock beats Scissors.");
      systempoints++;
    }
    else if (system == 2) {
      console.log("You win! Scissors beats Paper.");
      points++;
    }
    else {
      console.log("It's a tie!");
      points++;
      systempoints++;
    }
  }
  else if (decision == 4) {
    console.log("Thanks for playing!");
    console.log("Your points: " + points);
    console.log("System points: " + systempoints);
    break;
  }
  else {
    console.log("Invalid input. Please try again.");
  }
}
