let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"<b>I can see you right now in the kitchen, bending over a hot stove. But I can`t see the stove.</b>" <br><br> <u>Rufus T. Firefly</u> - played by Groucho Marx (<i>Duck Soup</i>, 1933)',
    '"<b>Of all the gin joints, in all the towns, in all the world, she walks into mine.</b>" <br><br> <u>Rick</u> - played by Humphrey Bogart (<i>Casablanca</i>, 1942)',
    '"<b>Public enemy, he calls me!</b>" <br><br> <u>Johnny Rocco</u> - played by Edward G. Robinson (<i>Key Largo</i>, 1948)',
    '"<b>Fasten your seat belts, it`s going to be a bumpy night!</b>" <br><br> <u>Margo</u> - played by Bette Davis (<i>All About Eve</i>, 1950)',
    '"<b>Frankly, my dear, I don`t give a damn.</b>" <br><br> <u>Rhett Butler</u> - played by Clark Gable (<i>Gone with the Wind</i>, 1939)',
    '"<b>Here`s looking at you, kid.</b>" <br><br> <u>Rick</u> - played by Humphrey Bogart (<i>Casablanca</i>, 1942)',
    '"<b>To be afraid, you gotta have a heart. I don`t think I got one. I had that cut out of me a long time ago.</b>" <br><br> <u>Rocky Sullivan</u> - played by James Cagney (<i>Angels with Dirty Faces</i>, 1938)',
    '"<b>Mother of Mercy! Is this the end of Rico?</b>" <br><br> <u>Caesar Enrico Bandello</u> - played by Edward G. Robinson (<i>Little Caesar</i>, 1931)',
    '"<b>My great aunt Jennifer ate a whole box of candy every day of her life. She lived to be 102 and when she`d been dead three days she looked better than you do *now!*</b>" <br><br> <u>Sheridan Whiteside</u> - played by Monty Woolley (<i>The Man Who Came to Dinner</i>, 1942)',
    '"<b>I never drink... wine.</b>" <br><br> <u>Count Dracula</u> - played by Bela Lugosi (<i>Dracula</i>, 1931)',
  ];

btn.addEventListener('click', function(){
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is the only movie from the 1930s to win all five major Academy Awards?',
    answers: [
      { text: 'The Wizard of Oz', correct: false },
      { text: 'Top Hat', correct: false },
      { text: 'Gone with the Wind', correct: false },
      { text: 'It Happened One Night', correct: true }
    ]
  },
  {
    question: 'What is the only movie that starred both Edward G. Robinson and James Cagney?',
    answers: [
      { text: 'Double Indemnity', correct: false },
      { text: 'Smart Money', correct: true },
      { text: 'A Slight Case of Murder', correct: false },
      { text: 'Picture Snatcher', correct: false }
    ]
  },
  {
    question: 'What year was Bette Davis born?',
    answers: [
      { text: '1901', correct: false },
      { text: '1915', correct: false },
      { text: '1908', correct: true },
      { text: '1893', correct: false }
    ]
  },
  {
    question: 'In 1999, what movie was considered the greatest British film of all time?',
    answers: [
      { text: 'The Third Man', correct: true },
      { text: 'Brief Encounter', correct: false },
      { text: 'The 39 Steps', correct: false },
      { text: 'Great Expectations', correct: false }
    ]
  },
  {
    question: 'Which actress has the most Oscar wins?',
    answers: [
      { text: 'Bette Davis', correct: false },
      { text: 'Katharine Hepburn', correct: true },
      { text: 'Lauren Becall', correct: false },
      { text: 'Ingrid Bergman', correct: false }
    ]
  },
  {
    question: 'Which movie starred Anthony Perkins in 1960?',
    answers: [
      { text: 'The Alamo', correct: false },
      { text: 'Spartacus', correct: false },
      { text: 'The Apartment', correct: false },
      { text: 'Psycho', correct: true }
    ]
  },
  {
    question: 'Which movie was directed by Stanley Kubrick in 1956?',
    answers: [
      { text: 'The Killing', correct: true },
      { text: 'Lolita', correct: false },
      { text: 'Spartacus', correct: false },
      { text: 'Paths of Glory', correct: false }
    ]
  },
  {
    question: 'What year was Humphrey Bogart born?',
    answers: [
      { text: '1905', correct: false },
      { text: '1900', correct: false },
      { text: '1899', correct: true },
      { text: '1880', correct: false }
    ]
  },
  {
    question: 'What is Marilyn Monroe`s most famous movie?',
    answers: [
      { text: 'Bus Stop', correct: false },
      { text: 'Some Like It Hot', correct: true },
      { text: 'The Prince and the Showgirl', correct: false },
      { text: 'The Seven Year Itch', correct: false }
    ]
  },
  {
    question: 'What is James Cagney`s favorite role?',
    answers: [
      { text: 'Angels with Dirty Faces', correct: false },
      { text: 'G Men', correct: false },
      { text: 'The Public Enemy', correct: false },
      { text: 'Yankee Doodle Dandy', correct: true }
    ]
  },
  {
    question: 'Which movie does NOT star Humphrey Bogart?',
    answers:[
      { text: 'Casablanca', correct: false },
      { text: 'Each Dawn I Die', correct: true },
      { text: 'The Oklahoma Kid', correct: false },
      { text: 'Kid Galahad', correct: false }
    ]
  },
  {
    question: 'What year was Marilyn Monroe born?',
    answers:[
      { text: '1906', correct: false },
      { text: '1899', correct: false },
      { text: '1915', correct: false },
      { text: '1926', correct: true }
    ]
  },
]

const previous = document.getElementsByClassName("previous")[0];
const next = document.getElementsByClassName("next")[0];
const image_div = document.querySelector(".images");
let left = parseFloat(window.getComputedStyle(image_div).getPropertyValue("left"));
let images = image_div.querySelectorAll("img");
const image_width = parseFloat(window.getComputedStyle(images[0]).getPropertyValue("width"));
const image_margin_right = parseFloat(window.getComputedStyle(images[0]).getPropertyValue("margin-right"));

function image_copy_add(){
	for (let i = 0 ; i<= 20 ; i++){
		images.forEach(function(item){
            let img = document.createElement("img");
            let a_tag = document.createElement("a");
            a_tag.href = "#";
            img.src = item.src;
            a_tag.appendChild(img);
			image_div.appendChild(a_tag);
		});
	}
}
image_copy_add();
function previous_function(){
	if (left < 0) {
		left = left + (image_width + image_margin_right);
		image_div.style.left = left + "px";
	}
}
function next_function(){
	images = image_div.querySelectorAll("img");
	left = (left-(image_width + image_margin_right));
	image_div.style.left = parseFloat(left) + "px";
}
previous.addEventListener("click",() => {
	previous_function();
});
next.addEventListener("click",() => {
	next_function();
});
