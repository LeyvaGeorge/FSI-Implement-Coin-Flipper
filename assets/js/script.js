// TODO: Declare any global variables we need
let headFlipCount = 0;
let tailFlipCount = 0;

function updateScoreboard() {
    // Update the scorboard
    // Calculate the total number of rolls/flips
    let totalFlips = headFlipCount + tailFlipCount;

    // Make variables to track the percentages of heads and tails
    // Use the calculated total to calculate the percentages
    let percentHeads = 0;
    let percentTails = 0;
    if (totalFlips > 0) {
        percentHeads = Math.round((headFlipCount / totalFlips) * 100);
        percentTails = Math.round((tailFlipCount / totalFlips) * 100);
    }

    // Update the display of each table cell
    document.querySelector("#heads").textContent = headFlipCount;
    document.querySelector("#heads-percent").textContent = percentHeads + "%";
    document.querySelector("#tails").textContent = tailFlipCount;
    document.querySelector("#tails-percent").textContent = percentTails + "%";
}

document.addEventListener('DOMContentLoaded', function () {
    let flipButton = document.querySelector('#flip');
    flipButton.addEventListener('click', function() {
        // Generate a random number
        let randomNumber = Math.random();

        // Determine flip outcome based on a fair coin
        let isHeads = true;
        if (randomNumber < 0.50) {
            isHeads = false;
        }
       
        let coin = document.querySelector("#coin");
        let status = document.querySelector("#status");
        
        // Update image and status message in the DOM
        if (isHeads) {
            coin.src = "assets/images/penny-heads.jpg";
            coin.alt = "Penny (heads side)";
            status.textContent = "You flipped a heads!";
            headFlipCount++;
        } else {
            coin.src = "assets/images/penny-tails.jpg";
            coin.alt = "Penny (tails side)";
            status.textContent = "You flipped a tails!";
            tailFlipCount++;
        }

        updateScoreboard();
    });

    let clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', function() {
        // Reset global variables to 0
        headFlipCount = 0;
        tailFlipCount = 0;

        let coin = document.querySelector("#coin");
        let status = document.querySelector("#status");

        coin.src = "assets/images/penny-heads.jpg";
        coin.alt = "Penny (heads side)";
        status.textContent = "Let's Get Rolling!";

        // Update the scoreboard
        updateScoreboard();
    });

})