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

    // Create boxes for each word and add click event listener
    for (let i = 0; i < letters.length; i++) {
        const word = letters[i];
        console.log('for this word box will be created',word)
        const box = document.createElement("div");
        box.className = "box";
        box.innerText = word;
    
        box.addEventListener("click", function () {
            // Toggle the "selected" class on click
            box.classList.toggle("selected");
        });
    
        displayBox.appendChild(box);
    }

    // Clear the inputField
    inputField.value = "";

};


// Function to move selected items forward or backward
const moveSelected = (direction) => {
    const displayBox = document.getElementById("displayBox");
    const selectedBox = document.getElementById("selectedBox");
    

   // Initialize an empty array to store selected items
   const selectedItems = [];

   // Select items based on the direction
   if (direction === "forward") {
       const boxes = displayBox.getElementsByClassName("box");
       console.log('boxes', boxes)
       for (let i = 0; i < boxes.length; i++) {
           const box = boxes[i];
           if (box.classList.contains("selected")) {
               selectedItems.push(box);
           }
           
       }
   } else if (direction === "backward") {
       const boxes = selectedBox.getElementsByClassName("box");
       for (let i = 0; i < boxes.length; i++) {
           const box = boxes[i];
           if (box.classList.contains("selected")) {
               selectedItems.push(box);
           }
       }
   }
      
// Move selected items based on the direction
for (let i = 0; i < selectedItems.length; i++) {
    const box = selectedItems[i];
    if (direction === "forward") {
        selectedBox.appendChild(box);
    } else if (direction === "backward") {
        displayBox.appendChild(box);
    }
    // Remove the "selected" class after moving
    box.classList.remove("selected");
}
 
};


// Call the display function on window load
window.addEventListener('load', moveSelected);
