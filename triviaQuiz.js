const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
});

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
      { text: '1900', correct: false },
      { text: '1920', correct: false },
      { text: '1895', correct: false },
      { text: '1908', correct: true }
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
    question: 'What year was Humphrey Bogart born?',
    answers: [
      { text: '1899', correct: true },
      { text: '1900', correct: false },
      { text: '1890', correct: false },
      { text: '1880', correct: false }
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
    question: 'Who won best actor at the Academy Awards in 1939?',
    answers:[
      { text: 'Leslie Howard', correct: false },
      { text: 'Spencer Tracy', correct: true },
      { text: 'James Cagney', correct: false },
      { text: 'Robert Donat', correct: false }
    ]
  },
  {
    question: 'What was the most successful movie starring the Marx Brothers?',
    answers:[
      { text: 'Animals Crackers (1930)', correct: false },
      { text: 'A Night at the Opera (1935)', correct: false },
      { text: 'Horse Feathers (1932)', correct: false },
      { text: 'Duck Soup (1933)', correct: true }
    ]
  },
<<<<<<< HEAD
];
=======
];
>>>>>>> 01f4b4071e766d60c032302a5e558bb5920868be
