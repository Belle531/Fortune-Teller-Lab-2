

document.addEventListener('DOMContentLoaded', function() {
    function fortuneTeller(name, age) {
        let nameFortune = "";
        let ageFortune = "";

        if (name.length > 7) {
            nameFortune = "You will marry late in life.";
        } else if (name.length < 5) {
            nameFortune = "You will marry within a year.";
        } else {
            nameFortune = "You will encounter a once-in-a-lifetime opportunity.";
        }

        if (name.charAt(0).toUpperCase() === 'R') {
            nameFortune += " Also, you will be rich.";
        }

        if (name.toLowerCase().includes('i')) {
            nameFortune += " And you will fall in love this week.";
        }

        if (age < 20) {
            ageFortune = "You will discover a hidden talent.";
        } else if (age >= 20 && age < 40) {
            ageFortune = "You will make significant career advancements.";
        } else {
            ageFortune = "You will find peace and contentment.";
        }

        let fullFortune = nameFortune + " " + ageFortune;
        return fullFortune.trim(); 
    }

    const fortuneButton = document.getElementById("fortuneButton");
    const nameInput = document.getElementById("nameInput");
    const ageInput = document.getElementById("ageInput");
    const fortuneOutput = document.getElementById("fortuneOutput");

    if (fortuneButton && nameInput && ageInput && fortuneOutput){
        fortuneButton.addEventListener("click", function() {
            let name = nameInput.value;
            let age = parseInt(ageInput.value);

            if (name && !isNaN(age)) {
                let fortune = fortuneTeller(name, age);
                fortuneOutput.textContent = fortune;
            } else {
                fortuneOutput.textContent = "Invalid input. Please enter a valid name and age.";
            }
        });
    } else {
        console.error("Missing HTML elements!");
    }
});

// Explanation:
// FortuneTeller (name, age) Function:
// Takes name and age as input
// Initializes nameFortune and ageFortune as empty strings. 
// Applies if statements to determine fortunes based on the 
// length, first letter, and content of the name
// Applies if statements to determine fortunes based on the age. 
// Combines the name and age fortunes into a single string. 
// returns the combined fortune string. 

// Prompting User Input: 
// Prompt() is used to ask the user for their name and age.
// ParseInt() converts the age input to a number
// Input validation is performed to ensure that both name and age values are valid. 
// The fortuneTeller function is called with the use's input, and the result is displayed
// using console.log()

// BONUS - Creating a User Interface (Frontend)