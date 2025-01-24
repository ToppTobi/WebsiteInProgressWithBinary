// script.js
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Fragen und Antworten
const quiz = [
  { question: "wie heisst Tobis Kuscheltier", answer: "hundi" },
  { question: "Was isch Tobis lieblingsfarb", answer: "blau" },
  { question: "Wo will Tobi unbedingt emolle hie goh", answer: "japan" }
];

let currentQuestion = 0;

// Funktion zum Hinzufügen einer Nachricht
function addMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Scrollt nach unten
}

// Nächste Frage anzeigen
function askNextQuestion() {
  if (currentQuestion < quiz.length) {
    addMessage(quiz[currentQuestion].question, 'bot');
  } else {
    addMessage("JAAA, du hast es geschafft!", 'bot');
  }
}

// Antwort überprüfen
function checkAnswer(userAnswer) {
  const correctAnswer = quiz[currentQuestion].answer.toLowerCase();
  if (userAnswer.includes(correctAnswer)) {
    addMessage("Richtig!", 'bot');
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      askNextQuestion();
    } else {
      addMessage("JAAA, du hast es geschafft!", 'bot');
      addMessage("Das letzte Geschenk ist bei einer Pflanze, die aber nach nichts riecht und vielleicht auch selber gemacht ist.", 'bot');


    }
  } else {
    addMessage("Falsch, versuche es noch einmal.", 'bot');
  }
}

// Event Listener für den Button
sendButton.addEventListener('click', () => {
  const userText = userInput.value.trim().toLowerCase();
  if (userText) {
    addMessage(userText, 'user');
    checkAnswer(userText);
    userInput.value = ''; // Eingabefeld leeren
  }
});

// Eingabetaste als Shortcut
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendButton.click();
  }
});

// Start des Quiz
askNextQuestion();
