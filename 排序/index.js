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
const xzSort = function (a) {
    let list = [...a]
    for (let i = 0; i < list.length - 1; i++) {
        let temI = i
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[temI]) {
                temI = j
            }
        }
        let tmp = list[i]
        list[i] = list[temI]
        list[temI] = tmp
    }
    return 
}
testSortingAlgorithm(xzSort)
// console.log(JSON.stringify(xzSort(arr)))