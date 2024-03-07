const unsortedArray = [9, 5, 7, 3, 15, 12];
const sortedArray = mergeSort(unsortedArray);

function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    // Splitting the array into two halves
    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);
  
    // Recursively sort both halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
  
    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(leftArray, rightArray) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Merge the two arrays while sorting
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        result.push(leftArray[leftIndex]);
        leftIndex++;
      } else {
        result.push(rightArray[rightIndex]);
        rightIndex++;
      }
    }
  
    // Push remaining elements of leftArray, if any
    while (leftIndex < leftArray.length) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    }
  
    // Push remaining elements of rightArray, if any
    while (rightIndex < rightArray.length) {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  
    return result;
  }
  
  console.log(sortedArray);