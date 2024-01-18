// 深拷贝
const deepClone = function (obj, hash = new WeakMap()) {
    // 基础类型直接返回
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    // 单独处理日期和正则表达式类型
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);

    // 检查哈希表中是否已经拷贝过该对象
    if (hash.has(obj)) {
        return hash.get(obj);
    }
    // 递归复制对象或数组
    let copyObj = Array.isArray(obj) ? [] : {};
    hash.set(obj, copyObj)
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copyObj[key] = deepClone(obj[key], hash)
        }
    }
    return copyObj
}
// let xh1 = {}
// let xh = { a: xh1 }
// xh1.a = xh
// let origin = { a: 1, b: 2, c: null, d: undefined, e: { e1: 1 }, f: { f1: 1, f2: { f21: 21 } }, arr: [1, 2, { arrobj: 123 }], date: new Date(), reg: new RegExp(/1/g), xh }
// let copy = deepClone(origin)
// console.log(origin)
// console.log(copy)

// 数组扁平化
const flattenArray = function (list) {
    let reuslt = []
    for (let i = 0; i < list.length; i++) {
        if (Array.isArray(list[i])) {
            reuslt = [...reuslt, ...flattenArray(list[i])]
        } else {
            reuslt.push(list[i])
        }
    }
    return reuslt
}
// // 使用示例
// const flatArray = flattenArray([1, [2, [3, [4, 5]], 6], 7]);
// console.log(flatArray)

// 数组去重，利用散列表
const uniqueArray = function (list) {
    let result = []
    let tmp = {}
    for (let i = 0; i < list.length; i++) {
        if (!tmp.hasOwnProperty(list[i])) {
            result.push(list[i])
            tmp[list[i]] = true
        }
    }
    return result
}
// const uniqueArr = uniqueArray([1, 2, 2, 3, 4, 4, 5]);
// console.log(uniqueArr); // 输出: [1, 2, 3, 4, 5]

// 实现promise
const MyPromise = function (executor) {
    let status = 'pending'
    let value = undefined
    let resolveCallbackList = []
    let rejectCallbackList = []

    let resolve = function (val) {
        status = 'resolved'
        value = val
        resolveCallbackList.forEach(cb => { cb(value) })
    }
    let reject = function (val) {
        status = 'rejected'
        value = val
        rejectCallbackList.forEach(cb => { cb(value) })
    }
    try {
        executor(resolve, reject)
    } catch (err) {
        reject(err)
    }
    this.then = function (success, fail) {
        if (status === 'pending') {
            resolveCallbackList.push(success)
            rejectCallbackList.push(fail)
        } else if (status === 'resolved') {
            success(value)
        } else if (status === 'rejected') {
            fail(value)
        }
    }
}
// // 使用示例
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Promise resolved");
//         reject("Promise reject");
//     }, 1000);
// });

// promise.then(
//     value => {
//         console.log('成功', value); // 输出: Promise resolved
//     },
//     reason => {
//         console.log('失败', reason);
//     }
// );
// 防抖和节流
const debounce = function (fun, limit = 300) {
    let timer = null
    return function (...arg) {
        const context = this
        clearTimeout(timer)
        timer = setTimeout(() => {
            fun.apply(context, [...arg])
        }, limit)
    }
}
const throttle = function (fun, limit = 300) {
    let isJl = false
    return function (...arg) {
        if (isJl) return
        let context = this
        fun.apply(context, [...arg])
        isJl = true
        setTimeout(() => { isJl = false }, limit)
    }
}
// 函数柯里化
const curry = function (fun) {
    return function curried(...arg) {
        if (arg.length >= fun.length) {
            return fun.apply(this, arg)
        } else {
            return function (...arg2) {
                return curried.apply(this, [...arg, ...arg2])
            }
        }
    }
}
// 二分查找
const search = function (list, target) {
    let left = 0
    let right = list.length - 1
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        const cur = list[mid]
        if (target === cur) {
            return mid
        } else if (target > cur) {
            left = mid + 1
        } else {
            right = right - 1
        }
    }
    return -1
}
// call apply实现
Function.prototype.myCall = function (context = window, ...arg) {
    context.fn = this
    let result = context.fn(...arg)
    delete context.fn
    return result
}
Function.prototype.myApply = function (context = window, arg = []) {
    context.fn = this
    let result = Array.isArray(arg) ? context.fn(arg) : context.fn()
    delete context.fn
    return result
}
Function.prototype.myBind = function (context = window, ...arg) {
    let that = this
    // return function (...arg2) {
    //     that.call(context, [...arg, ...arg2])
    // }

    let boundFunction = function (...args) {
        return that.apply(this instanceof boundFunction ? this : context, [...arg, ...arg2]);
    };

    // 维护原型关系
    if (that.prototype) {
        boundFunction.prototype = Object.create(that.prototype);
    }

    return boundFunction;
}
// 斐波那契函数
const fbnq = function (n) {
    let a = 1
    let b = 0
    let tmp
    while (n > 1) {
        console.log(a, b)
        tmp = a
        a = a + b
        b = tmp
        n--
    }
    return a
}
console.log(fbnq(0))
// 最长子串优
const maxStr = function (str) {
    let map = {}
    let max = 0
    let start = 0
    let result = []
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] !== undefined && map[str[i]] >= start) {
            start = map[str[i]] + 1
        }
        map[str[i]] = i
        const curLen = (i - start) + 1
        if (curLen > max) {
            max = curLen
            result = [str.slice(start, i + 1)]
        } else if (curLen === max) {
            result.push(str.slice(start, i + 1))
        }
    }
    return result
}
// console.log(maxStr('abcdcafkikoopwjn'))
// 最长子串差
// const maxStr = function (str) {
//     let str2 = ''
//     let max = 0
//     let result = []
//     for (let i = 0; i < str.length; i++) {
//         const n = str2.indexOf(str[i])
//         if (n !== -1) {
//             // obj[str2] = str2.length
//             if (str2.length > max) {
//                 max = str2.length
//                 result = [str2]
//             } else if (str2.length === max) {
//                 result.push(str2)
//             }
//             str2 = str2.slice(n + 1) + str[i]
//         } else {
//             str2 += str[i]
//         }
//     }
//     if (str2.length > max) {
//         max = str2.length
//         result = [str2]
//     } else if (str2.length === max) {
//         result.push(str2)
//     }
//     return result
// }
// 使用示例
// console.log(lengthOfLongestSubstring("abcabcbb")); // 输出 3
// 最多出现字符串
const getMoreStr = function (str) {
    let obj = {}
    let max = 0
    let maxI = undefined
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]] += 1
        } else {
            obj[str[i]] = 1
        }
        if (obj[str[i]] > max) {
            max = obj[str[i]]
            maxI = [str[i]]
        } else if (obj[str[i]] === max) {
            maxI = [...maxI, str[i]]
        }
    }
    return maxI
}
// console.log(getMoreStr('ajhuaanhuiu'))
// 合并两个有序数组
const merge = function (arr1, arr2) {
    let arr1Index = 0
    let arr2Index = 0
    let result = []
    while (arr1.length > arr1Index && arr2.length > arr2Index) {
        if (arr1[arr1Index] < arr2[arr2Index]) {
            result.push(arr1[arr1Index])
            arr1Index++
        } else {
            result.push(arr2[arr2Index])
            arr2Index++
        }
    }
    return [...result, ...arr1.slice(arr1Index), ...arr2.slice(arr2Index)]
}
// console.log(merge([1, 3, 5, 7, 9], [2, 4, 6, 8]))