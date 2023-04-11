// Этот метод должен искать элемент в массиве и возвращать его индекс или -1, если элемент не находится в массиве.
// Например, если ты ищешь G в массиве [A, B, C, D, E, F, G, H], твой метод должен возвращать 6. Если ты ищешь X, он должен возвращать -1.

function binarySearch(arr, item) {
    arr.sort((a, b) => a - b)
    let start = 0
    let end = arr.length - 1
    return binarySearchExecution(arr, item, start, end)
}

function binarySearchExecution(arr, item, start, end) {

    let middle = Math.floor((start + end) / 2)

    if (end < start) return -1
    if (item == arr[middle]) return middle
    if (item < arr[middle]) return binarySearchExecution(arr, item, start, middle - 1)
    if (item > arr[middle]) return binarySearchExecution(arr, item, middle + 1, end)
}

module.exports = binarySearch




//итерационное решение (для меня)
// const binarySearchByIteration = (arr, item) => {
//     let start = 0
//     let end = arr.length - 1

//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2)
//         if (arr[middle] == item) return middle

//         if (arr[middle] > item) {
//             end = middle - 1
//         } else if (arr[middle] < item) {
//             start = middle + 1
//         }
//     }
//     return - 1 


