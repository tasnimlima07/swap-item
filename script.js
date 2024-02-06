const letters = [];

const display = () => {
    // Clear the selectedBox
    const selectedBox = document.getElementById("selectedBox");
    while (selectedBox.firstChild) {
        selectedBox.removeChild(selectedBox.firstChild);
    }

    // Clear the letters array
    letters.length = 0;

    // Get input value and split it into words
    const inputField = document.getElementById("inputField");
    const inputValue = inputField.value;
    console.log('input value',inputValue)

    const words = inputValue.split(',');

    // Trim each word and push it to the letters array
    words.forEach((word, index) => {
        letters.push(word.trim());
    });

    // Clear the displayBox
    const displayBox = document.getElementById("displayBox");
    while (displayBox.firstChild) {
        displayBox.removeChild(displayBox.firstChild);
    }

    // Create boxes for each letter and add click event listener
    letters.forEach((word, index) => {
        const box = document.createElement("div");
        box.className = "box";
        box.innerText = word;

        box.addEventListener("click", function () {
            // Toggle the "selected" class on click
            box.classList.toggle("selected");
        });
        console.log("Box clicked and moved:", word);
        displayBox.appendChild(box);
    });

    // Clear the inputField
    inputField.value = "";
};

// Function to move selected items forward or backward
const moveSelected = (direction) => {
    const displayBox = document.getElementById("displayBox");
    const selectedBox = document.getElementById("selectedBox");

    // Get all selected items based on the direction
    const selectedItems = (direction === "forward") ?
        Array.from(displayBox.getElementsByClassName("box")).filter(box => box.classList.contains("selected")) :
        Array.from(selectedBox.getElementsByClassName("box")).filter(box => box.classList.contains("selected"));

    // Move selected items based on the direction
    selectedItems.forEach(box => {
        if (direction === "forward") {
            selectedBox.appendChild(box);
        } else if (direction === "backward") {
            displayBox.appendChild(box);
        }
        // Remove the "selected" class after moving
        box.classList.remove("selected");
    });
};


// Call the display function on window load
window.addEventListener('load', display);
