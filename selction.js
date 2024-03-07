const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray);

function selectionSort(array) {
    const n = array.length;
  
    // Loop 
    for (let i = 0; i < n; i++) {
      // Assume current index has the minimum value
      let minIndex = i;
  
      // Loop through the remaining elements to find the minimum
      for (let j = i + 1; j < n; j++) {
        // If we find element smaller than current minimum, update minIndex
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the current element with the minimum element
      if (minIndex !== i) {
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }
  
    return array;
  }
  
