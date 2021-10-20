//O(log(N))
exports.binarySearch = (arr, num) => {
    let startIndex = 0
    let endIndex = arr.length - 1
    let count = 1

    while (startIndex <= endIndex) {
        let pivot = Math.ceil((startIndex + endIndex) / 2)
        count += 1
        // console.log(count)

        if (arr[pivot] === num) {
            return `Found ${num} at ${pivot}`
        } else if (arr[pivot] < num) {
            startIndex = pivot + 1
        } else {
            endIndex = pivot - 1
        }
    }
    return false
}