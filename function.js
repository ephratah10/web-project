function checkChessAnswer1() {
    var userAnswer = document.getElementById("quizAnswer").value;

    if (userAnswer.trim() === "64") {
        document.getElementById("quizResult").innerText = "Correct! There are 64 squares on a standard chessboard.";
    } else {
        document.getElementById("quizResult").innerText = "Incorrect. Try again!";
    }
}
function checkChessAnswer2() {
    let answer = document.getElementById("quizAnswer2").value;
    let result = document.getElementById("quizResult2");
    if (answer == 32) {
        result.textContent = "Correct! Chess has a total of 32 pieces in a standard set, with each player starting the game with 16 pieces: 1 king, 1 queen, 2 rooks, 2 knights, 2 bishops, and 8 pawns.";
    } else {
        result.textContent = "Incorrect. Try again!.";
    }
}
function checkChessAnswer3() {
    var answer = document.getElementById("quizAnswer3").value;
    if (answer.toLowerCase() == "rook") {
        document.getElementById("quizResult3").innerHTML = "Correct!";
    } else {
        document.getElementById("quizResult3").innerHTML = "Incorrect. The correct answer is Rook.";
    }
}
function validateForm(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form elements
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    // Get values from form inputs
    var nameValue = nameInput.value.trim();
    var emailValue = emailInput.value.trim();
    var messageValue = messageInput.value.trim();

    // Simple validation: Check if the name, email, and message are not empty
    if (nameValue === "" || emailValue === "" || messageValue === "") {
        alert("Please fill out all fields.");
        return false; // Prevent form submission
    }

    // Additional validation logic can be added here based on your requirements

    // If all validation passes, you can proceed with form submission or further actions
    alert("Form submitted successfully!");

    // Optionally, reset the form
    event.target.reset();
}
