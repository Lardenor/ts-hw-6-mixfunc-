"use strict";
function findLargestElement(arr) {
    if (arr.length === 0) {
        return null;
    }
    let largestElement = null;
    let isMixedArray = false;
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (typeof currentElement !== "number" && typeof currentElement !== "string") {
            isMixedArray = true;
            break;
        }
        if (largestElement === null) {
            largestElement = currentElement;
        }
        else {
            if (typeof largestElement === "number" && typeof currentElement === "number") {
                largestElement = Math.max(largestElement, currentElement);
            }
            else if (typeof largestElement === "string" && typeof currentElement === "string") {
                if (currentElement.length > largestElement.length) {
                    largestElement = currentElement;
                }
            }
            else {
                isMixedArray = true;
                break;
            }
        }
    }
    if (isMixedArray) {
        throw new Error("Масив може містити лише числа або слова.");
    }
    return largestElement;
}
const numbers = [10, 5, 8, 3];
const largestNumber = findLargestElement(numbers);
console.log(largestNumber); // Output: 10
const words = ["apple", "banana", "orange", "pear"];
const largestWord = findLargestElement(words);
console.log(largestWord); // Output: "banana"
const mixedArray = [10, "apple", 5, "banana", "orange", 3];
// Throws an error: "Масив може містити лише числа або слова."
const mixedResult = findLargestElement(mixedArray);
