function findLargestElement(arr: (number | string)[]): number | string | null {
  if (arr.length === 0) {
    return null;
  }

  let largestElement: number | string | null = null;
  let isMixedArray = false;

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (typeof currentElement !== "number" && typeof currentElement !== "string") {
      isMixedArray = true;
      break;
    }

    if (largestElement === null) {
      largestElement = currentElement;
    } else {
      if (typeof largestElement === "number" && typeof currentElement === "number") {
        largestElement = Math.max(largestElement, currentElement);
      } else if (typeof largestElement === "string" && typeof currentElement === "string") {
        if (currentElement.length > largestElement.length) {
          largestElement = currentElement;
        }
      } else {
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

const numbers: number[] = [10, 5, 8, 3];
const largestNumber = findLargestElement(numbers);
console.log(largestNumber); 

const words: string[] = ["apple", "banana", "orange", "pear"];
const largestWord = findLargestElement(words);
console.log(largestWord); 

const mixedArray: (number | string)[] = [10, "apple", 5, "banana", "orange", 3];

const mixedResult = findLargestElement(mixedArray);

