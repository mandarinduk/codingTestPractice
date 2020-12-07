/**
 * [JS100제] 문제 49번
 * =================================================================
 * 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
 * =================================================================
 */
const selectMaximum = (strNums) => {
  const arrNums = strNums.split(" ");
  let maxNum = 0;

  arrNums.forEach((num) =>
    Number(num) > maxNum ? (maxNum = Number(num)) : (maxNum = maxNum)
  );

  return maxNum;
};
/**
 * =================================================================
 * 답안: 내림차순 정렬한 뒤 첫번 째 값을 return
 * numbers.sort((a, b) => {
 *   return b-a;
 * });
 *
 * return(numbers[0]);
 * =================================================================
 */

/**
 * [JS100제] 문제 50번
 * =================================================================
 * 버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.
 * =================================================================
 */
const bubble = (arr) => {
  let temp = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        temp = 0;
      }
    }
  }
  return arr;
};
