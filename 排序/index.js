import testSortingAlgorithm from './sortTest.js'


// 冒泡
// const maopaoSort = function (a) {
//     let list = [...a]
//     for (let i = 0; i < list.length; i++) {
//         let f = false
//         for (let j = 0; j < list.length - i; j++) {
//             if (list[j] > list[j + 1]) {
//                 let tmp = list[j]
//                 list[j] = list[j + 1]
//                 list[j + 1] = tmp
//                 f = true
//             }
//         }
//         if (!f) return list
//     }
//     return list
// }
// console.log(JSON.stringify(maopaoSort(arr)))
// 插入
// const crSort = function (a) {
//     let list = [...a]
//     for (let i = 1; i < list.length; i++) {
//         let tmp = list[i]
//         let j = i - 1
//         for (;j >= 0; j--) {
//             if (list[j] > tmp) {
//                 list[j+1] = list[j]
//             } else {
//                 break
//             }
//         }
//         list[j + 1] = tmp
//     }
//     return list
// }
// console.log(JSON.stringify(crSort(arr)))
// 选择
// const xzSort = function (a) {
//     let list = [...a]
//     for (let i = 0; i < list.length - 1; i++) {
//         let temI = i
//         for (let j = i + 1; j < list.length; j++) {
//             if (list[j] < list[temI]) {
//                 temI = j
//             }
//         }
//         let tmp = list[i]
//         list[i] = list[temI]
//         list[temI] = tmp
//     }
//     return 
// }
// 归并
// const mergeSort = (list) => {
//     if (list.length <= 1) return list
//     const mid = Math.floor(list.length / 2)
//     let left = mergeSort(list.slice(0, mid))
//     let right = mergeSort(list.slice(mid))
//     return merge(left, right)

// }
// const merge = (left, right) => {
//     let result = []
//     let leftIndex = 0
//     let rightIndex = 0
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex])
//             leftIndex++
//         } else {
//             result.push(right[rightIndex])
//             rightIndex++
//         }
//     }
//     return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]
// }
// 快排
// const quickSort = function (list) {
//     if (list.length <= 1) return list
//     let left = []
//     let right = []
//     let mid = Math.floor(list.length / 2)
//     const cur = list.splice(mid, 1)
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] < cur[0]) {
//             left.push(list[i])
//         } else {
//             right.push(list[i])
//         }
//     }
//     return [...quickSort(left), ...cur, ...quickSort(right)]
// }

// 冒泡
// const mpSort = function (list) {
//     for (let i = 0; i < list.length; i++) {
//         let f = false
//         for (let j = 0; j < list.length - i; j++) {
//             if (list[j] > list[j + 1]) {
//                 let tmp = list[j + 1]
//                 list[j + 1] = list[j]
//                 list[j] = tmp
//                 f = true
//             }
//         }
//         if (!f) return list
//     }
//     return list
// }
// 插入
// const crSort = function (list) {
//     for (let i = 0; i < list.length; i++) {
//         let tmp = list[i]
//         let j = i - 1
//         for (; j >= 0; j--) {
//             if (tmp < list[j]) {
//                 list[j + 1] = list[j]
//             }else{
//                 break
//             }
//         }
//         list[j + 1] = tmp
//     }
//     return list
// }
// 选择
// const xzSort = function (list) {
//     for (let i = 0; i < list.length; i++) {
//         let tmpI = i
//         for (let j = i + 1; j < list.length; j++) {
//             if (list[j] < list[tmpI]) {
//                 tmpI = j
//             }
//         }
//         let tmp = list[tmpI]
//         list[tmpI] = list[i]
//         list[i] = tmp
//     }
//     return list
// }
const quickSort = function (list) {
    if (list.length <= 1) return list
    let left = []
    let right = []
    const curi = Math.floor(list.length / 2)
    let cur = list.splice(curi, 1)
    for (let i = 0; i < list.length; i++) {
        if (list[i] < cur[0]) {
            left.push(list[i])
        } else {
            right.push(list[i])
        }
    }
    return [...quickSort(left), ...cur, ...quickSort(right)]
}
testSortingAlgorithm(quickSort)