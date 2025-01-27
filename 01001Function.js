let output = ''; // Initialisiere den Output-String
let count = 0; // Initialisiere den Zähler

function generateRandomBinary() {
  const randomNumber = Math.random(); // Generiere eine Zufallszahl zwischen 0 und 1
  const binaryValue = Math.round(randomNumber);

  const binaryParagraph = document.getElementById("BinaryParagraph");

  // Füge die neue Zahl zum Paragraphen hinzu
  output += binaryValue;

  count++;

  // Füge einen Zeilenumbruch nach jeder 83. Zahl hinzu


  // Aktualisiere den Inhalt des Paragraphen
  binaryParagraph.innerHTML = output;

  const randomInterval = Math.random() * 3 + 1; // Generiere eine Zufallszahl zwischen 5 und 155 Millisekunden
  setTimeout(generateRandomBinary, randomInterval); // Setze die nächste Ausführung der Funktion mit dem zufälligen Intervall
}

generateRandomBinary();
