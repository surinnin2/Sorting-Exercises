function merge(arr1, arr2) {
    let idx1 = 0
    let idx2 = 0
    res = []

    while(arr1.length > idx1 && arr2.length > idx2) {
        if (arr1[idx1] >= arr2[idx2]) {
            res.push(arr2[idx2])
            idx2 += 1
        } else if (arr1[idx1] < arr2[idx2]) {
            res.push(arr1[idx1])
            idx1 += 1
        }
    }
    while(arr1.length > idx1) {
        res.push(arr1[idx1])
        idx1 += 1
    }
    while(arr2.length > idx2) {
        res.push(arr2[idx2])
        idx2 += 1
    }
    return res
}

function mergeSort(arr) {
    if(arr.length <= 1)  {
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

module.exports = { merge, mergeSort};