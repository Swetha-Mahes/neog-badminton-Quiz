var readlineSync = require("readline-sync");

var score = 0

var highScore = [
  {
    name: "swetha",
    score: 10
  },
  {
    name: "rani",
    score: "8"
  }
]

var questions = [
  {
    question: "In which year did Badminton become an Olympic sport?",
    answer: "1992"
  },
  {
    question: "Each game is played up to a minimum of how many points?",
    answer: "21"
  },
  {
    question: "What is the least amount of points a player must lead by to win the match? ",
    answer: "2"
  },
  {
    question: "How many times can a player strike a shuttlecock before it flies over the net?",
    answer: "Once"
  },
  {
    question: "Who is the Youngest Badminton Player to represent Indian at Championship? ",
    answer: "Saina Nehwal"
  },
  {
    question: "Which country has the maximum Olympics medals in badminton? ",
    answer: "china"
  },
  {
    question: "How many medals does India have at the Olympics in Badminton?",
    answer: "3"
  },
  {
    question: "What is the governing body for Badminton? ",
    answer: "Badminton world federation"
  },
  {
    question: "Who was the first Indian badminton Player to hold number one rank in World Rankings? ",
    answer: "Prakash padukone"
  },
  {
    question: "Who is the 1st Indian woman to win two olympic medals? ",
    answer: "P.V.Sindhu"
  }
]

var username = readlineSync.question("what is your name?");
console.log("Hello " + username + "!!")
console.log("This quiz is about all about Badminton! \n Let us see how much you know about it! \n\n");

function play(question, answer) {
  var givenans = readlineSync.question(question);
  if (givenans.toUpperCase() === answer.toUpperCase()) {
    console.log("You're right!!")
    score = score + 1
  } else {
    console.log("you're wrong! The right answer is " + answer)
  }
  console.log("your current score is " + score);
  console.log("--------------------------" + "\n")
}
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAAYY! You have SCORED ", score, " points");

console.log("Check out the previous high scores ");
for (var i = 0; i < highScore.length; i++) {
  console.log(highScore[i].name + "   -   " + highScore[i].score)

}
console.log("\n If you have bet the highscores ping me with the screenshot");