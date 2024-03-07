let array = [7, 3, 5, 9, 2, 6];
function insertionSort(array) {
    // Start on  second element because the first element is considered sorted
    for (let i = 1; i < array.length; i++) {
      let currentElement = array[i];
      let j = i - 1; // index last 
  
      // Move elements of the sorted section that are greater than the current element
      // one position ahead of their current position
      while (j >= 0 && array[j] > currentElement) {
        array[j + 1] = array[j];
        j--;
      }
      // Insert the current element into its correct position in the sorted section
      array[j + 1] = currentElement;
    }
  
    return array;
  }

  console.log("Original Array:", array);
  console.log("Sorted Array:", insertionSort(array));