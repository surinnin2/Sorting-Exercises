function bubbleSort(arr) {
    for (let a = arr.length;a > 0;a--) {
        for(let b = 0;b < a-1;b++) {
            if (arr[b] > arr[b+1]) {
                let tmp = arr[b]
                arr[b] = arr[b+1]
                arr[b+1] = tmp
            }
        }
    }
    return arr
}

module.exports = bubbleSort;