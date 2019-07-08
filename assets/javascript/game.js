$(document).ready(function() {
    //Setting up my global variables
    let wins = 0;
    let loses = 0;
    let pointValue = 0;
    let crystalValue = generateRandomCrystal();
    let randomNum = generateRandomNum();

    //This function generates a random number between 19 and 120 & return it
    function generateRandomNum() {
        return Math.floor(Math.random() * 102) + 19;
    }

    //This function will generate a random number between 1 and 12 & return it
    function generateRandomCrystal() {
        return {
            red: {
              points: Math.floor(Math.random() * 12) + 1,
            },
            blue: {
              points: Math.floor(Math.random() * 12) + 1,
            },
            yellow: {
              points: Math.floor(Math.random() * 12) + 1,
            },
            green: {
              points: Math.floor(Math.random() * 12) + 1,
            }
          };
    }

    //Simple function to clear the win/loss message when called
    function clearMessage() {
        $("#message").text("");
    }

    //Reset
    function reset() {
        pointValue = 0;
        crystalValue = generateRandomCrystal();
        randomNum = generateRandomNum();
        $("#targetNumber").text(randomNum);
        $("#currentScore").text(pointValue);
        //Testing
        console.log(`Red = ${crystalValue.red.points} | Blue = ${crystalValue.blue.points} | Yellow = ${crystalValue.yellow.points} | Green = ${crystalValue.green.points}`);
    };

    //This function checks to see if the player has won/lost
    function checkWinLoseCondition() {
        if (pointValue == randomNum) {
            wins++;
            $("#wins").text(`Wins: ${wins}`);
            $("#message").text("You have won!");
            reset();
            setTimeout(clearMessage, 3000);
        }
        else if (pointValue > randomNum) {
            loses++
            $("#loses").text(`Loses: ${loses}`);
            $("#message").text("You have lost!");
            reset();
            setTimeout(clearMessage, 3000);
        }
    }

    //Start the game
    reset();

    //Events listeners for each colored-crystal. When clicked, update pointValue and render it to the DOM.  Also check to see if the user has won/lost.
    $("#red").click(function() {
        $("#message").text("");
        pointValue += crystalValue.red.points;
        $("#currentScore").text(pointValue);
        checkWinLoseCondition();
    })
    $("#blue").click(function() {
        $("#message").text("");
        pointValue += crystalValue.blue.points;
        $("#currentScore").text(pointValue);
        checkWinLoseCondition();
    })
    $("#yellow").click(function() {
        $("#message").text("");
        pointValue += crystalValue.yellow.points;
        $("#currentScore").text(pointValue);
        checkWinLoseCondition();
    })
    $("#green").click(function() {
        $("#message").text("");
        pointValue += crystalValue.green.points;
        $("#currentScore").text(pointValue);
        checkWinLoseCondition();
    })

})