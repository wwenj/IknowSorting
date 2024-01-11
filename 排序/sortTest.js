
function generateRandomArray(size, range) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * range));
}

// 预置50个测试用例和它们的正确答案
const presetTestCases = [{ 'array': [98, 92, 85, 78, 60, 48, 13, 10, 8, 8], 'answer': [8, 8, 10, 13, 48, 60, 78, 85, 92, 98] }, { 'array': [56], 'answer': [56] }, { 'array': [94, 94, 94, 94, 94, 94, 94, 94, 94], 'answer': [94, 94, 94, 94, 94, 94, 94, 94, 94] }, { 'array': [0], 'answer': [0] }, { 'array': [58, 33, 45, 42, 57, 3, 67, 61, 9, 31, 21, 13, 3, 74, 67, 6, 49, 13, 68, 12], 'answer': [3, 3, 6, 9, 12, 13, 13, 21, 31, 33, 42, 45, 49, 57, 58, 61, 67, 67, 68, 74] }, { 'array': [84, 76, 73, 61, 59, 54, 41, 13, 7, 5], 'answer': [5, 7, 13, 41, 54, 59, 61, 73, 76, 84] }, { 'array': [37, 77, 92], 'answer': [37, 77, 92] }, { 'array': [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], 'answer': [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30] }, { 'array': [0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0], 'answer': [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1] }, { 'array': [36, 88, 11, 12, 3, 87, 7, 53, 80, 12, 74, 78, 63, 47, 22, 92, 37, 4, 53], 'answer': [3, 4, 7, 11, 12, 12, 22, 36, 37, 47, 53, 53, 63, 74, 78, 80, 87, 88, 92] }, { 'array': [92, 81, 80, 38, 32, 14], 'answer': [14, 32, 38, 80, 81, 92] }, { 'array': [7, 9, 29, 40, 50, 71, 74, 85], 'answer': [7, 9, 29, 40, 50, 71, 74, 85] }, { 'array': [79], 'answer': [79] }, { 'array': [1, 0, 0, 0, 1, 0, 0], 'answer': [0, 0, 0, 0, 0, 1, 1] }, { 'array': [41, 64, 3, 14, 69, 27], 'answer': [3, 14, 27, 41, 64, 69] }, { 'array': [97, 72, 39, 18, 17, 4, 1], 'answer': [1, 4, 17, 18, 39, 72, 97] }, { 'array': [14, 18, 50, 94], 'answer': [14, 18, 50, 94] }, { 'array': [49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49], 'answer': [49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49] }, { 'array': [0, 1, 1, 0, 0, 1, 0, 1, 1, 1], 'answer': [0, 0, 0, 0, 1, 1, 1, 1, 1, 1] }, { 'array': [58, 35, 48, 45, 12, 88, 73, 51, 38], 'answer': [12, 35, 38, 45, 48, 51, 58, 73, 88] }];

let failList = []
function testSortingAlgorithm(sortingFunction) {
  let successCount = 0;
  let failureCount = 0;

  // 测试预置的用例
  presetTestCases.forEach((testCase, index) => {
    const sorted = sortingFunction([...testCase.array]);
    const isSorted = JSON.stringify(sorted) === JSON.stringify(testCase.answer);

    if (isSorted) {
      successCount++;
    } else {
      failureCount++;
      failList.push([...testCase.array])
    }
    console.log(`执行中：预置测试用例${index + 1}，${isSorted ? '成功' : '失败'}`);
  });

  // 生成并测试额外的50个随机用例
  for (let i = 0; i < 50; i++) {
    const testCase = generateRandomArray(Math.floor(Math.random() * 20), 100);
    const answer = [...testCase].sort((a, b) => a - b);
    const sorted = sortingFunction([...testCase]);
    const isSorted = JSON.stringify(sorted) === JSON.stringify(answer);

    if (isSorted) {
      successCount++;
    } else {
      failureCount++;
      failList.push([...testCase])
    }
    console.log(`执行中：随机测试用例${i + 1}，${isSorted ? '成功' : '失败'}`);
  }

  console.log(`执行完成。成功：${successCount}，失败：${failureCount}`);
  if (failureCount){
    console.log("失败用例:", JSON.stringify(failList.slice(0, 3)))
  }
}

// 使用示例
// 假设你有一个排序函数 mySortFunction
// testSortingAlgorithm(mySortFunction);
export default testSortingAlgorithm
