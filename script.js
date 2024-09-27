//COLOR BOXES ----------

// Väljs alla element som har klassen .box och sparas i variabeln colorBoxes.forEach används för att gå igenom varje box-element
const colorBoxes = document.querySelectorAll(".box");
colorBoxes.forEach(box => {
    //När användaren klickar på boxen, körs funktionen changeColor som ändra bakgrundsfärgen.
    box.addEventListener("click", () => {
        const color = box.getAttribute("data-color");
        changeColor(color);
    });
              
});

//CHANGE COLOR ---------

// Ändra bakgrundsfärgen till värde av "data-color"

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

//HEX CODE BUTTON ----------

// Hämtar referensen till HTML-elementet med id "colorInput" (färgväljaren) och lagrar det i variabeln colorInput.
const colorInput = document.getElementById("colorInput");
colorInput.addEventListener("input", () => {
    // Hämtar det  värdet från färgväljaren och sparar det i variabeln userInput.
    const userInput = colorInput.value;
   //Anropar funktionen changeColor och skickar in userInput
    changeColor(userInput);
});

//RESET BUTTON --------

//När användaren klickar på knappen körs funktionen resetColor som återställer bakgrundsfärgen.
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetColor);

function resetColor() {
    document.body.style.backgroundColor = '';
}