/*
Write a function that takes an array of characters and reverses the characters in-place. 
*/

let sampleArr = ["a", "b", "c"];
let secondSampleArr = ["t", "e", "s", "t"]; 
let lastSampleArr = ["a"]

function reverseChars(inputArr) {
    // Edge case test: If the input array is of length 1 or an invalid data type / an empty array, spit the input value right back out. 
    if (inputArr.length == 1 || !inputArr.length) return inputArr;

    // We'll need some variables to track our place in the array. We'll make two here, one to monitor the left index position (i.e. beginning index position) and another to monitor the right index position (i.e. last index position). 
    let leftIndexTracker = 0;
    let rightIndexTracker = inputArr.length - 1;

    // We will now start to "straddle" the array on each far end (the first element and the last element) and slowly make our way inwards, one element at a time. We will continue to perform this operation until all elements in the array have been swapped. 
    while (leftIndexTracker < rightIndexTracker) {
        // Some helpful variables. The leftElement represents the array's element at the beginning index position (i.e. leftIndexTracker), and the rightElement variable represents the array's element at the last index position (i.e. rightIndexTracker). 
        let leftElement = inputArr[leftIndexTracker];
        let rightElement = inputArr[rightIndexTracker];

        // This is a very key step. One's first instinct might be to immediately replace one of the elements with the other to begin the "swapping" process. However, in doing so, you lose reference to the value you'll need to replace the other element with. So, to deal with that problem, we'll make a "placeholder" variable to hold a copy of the value of the element we're about to reassign.
        let placeholder = rightElement;

        // Now we can safely reassign the element without worrying about losing its original value. 
        inputArr[rightIndexTracker] = leftElement;

        // Now that that element has been reassigned, we reassign the other one using that value we stored in the placeholder variable.
        inputArr[leftIndexTracker] = placeholder;

        // Lastly, we need to move each index tracker variable one index position closer into the center of the array. So we will add one to the beginning index tracker, and subtract one from the other. 
        leftIndexTracker++;
        rightIndexTracker--;
    }

    // Finally, return the input array.
    return inputArr;
}

// Passing in an array with an odd number of characters will swap all elements except for the middle element. 
console.log(reverseChars(sampleArr)); // should return ["c", "b", "a"]

// Passing in an array with an even number of characters will swap all elements. 
console.log(reverseChars(secondSampleArr)); // should return ["t", "s", "e", "t"]

// Passing in an array with one or no elements will do nothing. 
console.log(reverseChars(lastSampleArr)); // should return ["a"]