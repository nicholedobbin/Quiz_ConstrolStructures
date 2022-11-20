let userInput = "";
const answer = "c";  
let retry = "y";  // Variable for stopping condition when user is prompted to try again.

do {
    userInput = String(prompt(`What colour is the sky?
                                a. Purple
                                b. Pink
                                c. Blue
                                Enter a, b or c:`)).toLowerCase(); // Ensures user input is read as lowercase by the program.
    if (userInput === answer) {
        alert("That's correct!");  
    } else if (userInput != answer) {
        retry = String(prompt(`That's incorrect. Would you like to try again?Enter Y or N`)).toLowerCase(); 
    }
} while (userInput != answer && retry === "y") // Stopping condition

