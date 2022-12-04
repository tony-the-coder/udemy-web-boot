//Random number for the dice game my version

function diceGame() {

    let ranNum1 = Math.floor((Math.random() * 6) + 1);
    let ranNum2 = Math.floor((Math.random() * 6) + 1);

    // Update the image my version

    document.querySelector(".img1").setAttribute("src", "/images/dice" + ranNum1 + ".png")
    document.querySelector(".img2").setAttribute("src", "/images/dice" + ranNum2 + ".png")



    ///Udemy Version
    /// The Udemy instructions have eight lines of code compared to my four, I did not feel like continuing to type because it was more work than what I had. Programming should be more concise. I am also learning Python, maybe that is why I am thinking "Pythonic" or something like that. 

    /// Beginning easy part of a Dicee Game
    if (ranNum1 > ranNum2) {
        console.log("First die Wins with a " + ranNum1 + " vs a " + ranNum2)
        document.querySelector("h1").textContent = "Player One Wins"
    }
    else if (ranNum2 === ranNum1) {
        document.querySelector("h1").textContent = "It is a Tie"
        console.log("tie " + ranNum1 + " and " + ranNum2)
    }
    else {

        document.querySelector("h1").textContent = "Player Two Wins"
        console.log("Second Die Wins with a " + ranNum2 + " vs " + ranNum1)
    }
}
