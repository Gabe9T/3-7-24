const unsortedArray = [3, 1, 6, 2, 8, 4];
const sortedArray = bubbleSort(unsortedArray);

function bubbleSort(array) {
    const length = array.length;
    let swapped; //declare
  
    do {
      swapped = false;
      for (let i = 0; i < length - 1; i++) {
        if (array[i] > array[i + 1]) {
          // Swap elements
          const temp = array[i];//put array[i] in temp so i can put [i+1] in [i] then put temp(origial [i] into [i+1])
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return array;
  }

  console.log(sortedArray);