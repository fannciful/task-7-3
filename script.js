'use strict'

function getNumber() {
    let userInput = null;

    for (let i = 0; i < 10; i++) {
        userInput = prompt('Input a number greater than 100: ');

        if (userInput === null) {
            alert('You canceled!');
        }
        else if (!userInput.trim()) {
            alert('You have entered nothing!');
        }
        else if (isNaN(userInput)) {
            alert('You entered not a number!');
        }
        else {
            userInput = Number(userInput);

            if (userInput > 100) {
                alert(`You entered a valid number: ${userInput}`);
            }
            else {
                alert('You entered a number less than 100');
            }
        }
    }

    alert(`The last entered number was: ${userInput}`);
}

getNumber();