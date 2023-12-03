function checkChessAnswer() {
    var userAnswer = document.getElementById("quizAnswer").value;

    if (userAnswer.trim() === "64") {
        document.getElementById("quizResult").innerText = "Correct! There are 64 squares on a standard chessboard.";
    } else {
        document.getElementById("quizResult").innerText = "Incorrect. Try again!";
    }
}
