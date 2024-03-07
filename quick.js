const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(array);

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    } else {//error handle
        const pivot = array[Math.floor(array.length / 2)];
        const left = [];
        const right = [];
        
        for (let i = 0; i < array.length; i++) {
            if (array[i] < pivot) {
                left.push(array[i]);
            } else if (array[i] > pivot) {
                right.push(array[i]);
            }
        }
        
        return [...quickSort(left), pivot, ...quickSort(right)];
    }
}

console.log(sortedArray);