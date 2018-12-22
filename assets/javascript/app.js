// -----------VARIABLES-------------
$ (function () {
    $("#startGame").show();
    $(".jumbotron").hide();
    $(startGame).show();
})


var timer;
var time = 60;

timer = setInterval(function () {
    time--;
    $("#timer").html("<h2>" + time + "</h2>")
    if (time === 0) {
        clearInterval(timer);
        alert("Game Over");
    }
    
}, 1000);

$("#startButton").click(function (){
    $("#startButton").hide();
    $(".jumbotron").show();
})

var myQuestions = [
  {question: "1. What was Rick's favorite exhibit in Anatomy Park?",
      answers: {
          a: "The Bone Train",
          b: "Spleen Mountain",
          c: "Bladder Falls",
          d: "Pirates of the Pancreas"
      },
      correctAnswer: "d"
  },
  {question: "2. In the pilot episode, why did Rick want to blow up earth?",
      answers: {
          a: "He wanted a clean start",
          b: "He wanted to accomplish something",
          c: "He was bored",
          d: "He was angry"
      },
      correctAnswer: "a"
  },
  {question: "3. What does 'wubaluba dub dub' mean?",
      answers: {
          a: "I will kill you",
          b: "I'm in great pain",
          c: "I dont like you",
          d: "None of the above",
      },
      correctAnswer: "b",
  },
  {question: "4. Who does Morty have a crush on?",
      answers: {
          a: "Amy",
          b: "Sarah",
          c: "Jessica",
          d: "Vanessa"
      },
      correctAnswer: "c"
  },
  {question: "5. Which dog thinks the human is saying, 'I love lasagna?'",
      answers: {
          a: "Bill",
          b: "Snuffles",
          c: "Lawnmower Dog",
          d: "Rick"
      },
      correctAnswer: "a"
  },
  {question: "6. What is Scary Terry's child named?",
      answers: {
          a: "Scary Jerry",
          b: "Scary Brandon",
          c: "Scary Larry",
          d: "Scary Brad"
      },
      correctAnswer: "b"
  },
  {question: "7. What is the name of the game Morty played in the arcade?",
      answers: {
          a: "The Adventures of Ron",
          b: "The life of Bob",
          c: "Roy: A Life Well Lived",
          d: "Jeff: The Experience"
      },
      correctAnswer: "c"
  },
  {question: "8. Which Earth is the main Rick from?",
      answers: {
          a: "C-137",
          b: "C-136",
          c: "C-138",
          d: "C-139"
      },
      correctAnswer: "a"
  },
  {question: "9. What does Jerry attempt to use as a gun at a wedding?",
      answers: {
          a: "Super Soaker",
          b: "Confetti Cannon",
          c: "T-shirt Cannon",
          d: "Potatoe Gun"
      },
      correctAnswer: "c"
  },
  {question: "10. Who is the character that makes Morty 'uncomfortable' in the bathroom?",
      answers: {
          a: "Scary Terry",
          b: "Mr. Meeseeks",
          c: "Nub Nub",
          d: "Mr. Jellybean"
      },
      correctAnswer: "d"
  },
];

// -----------FUNCTIONS-------------

$("#submit").click(function() {
  console.log("submit button")
});

function startGame() {
  for (var i = 0; i < myQuestions.length; i++) {
      $("#quiz").append(myQuestions[i].question + "<br>");
      $("#quiz").append("<input type='radio' name='" + i +  "' value='a'> " + myQuestions[i].answers.a + "<br>");
      $("#quiz").append("<input type='radio' name='" + i +  "' value='b'> " + myQuestions[i].answers.b + "<br>");
      $("#quiz").append("<input type='radio' name='" + i +  "' value='c'> " + myQuestions[i].answers.c + "<br>");
      $("#quiz").append("<input type='radio' name='" + i +  "' value='d'> " + myQuestions[i].answers.d + "<br><br>");
  }
};

startGame();