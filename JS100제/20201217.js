/**
 * [JS100제] 문제 60번
 * =================================================================
 * 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
 * 입력: aaabbbbcdddd
 * 출력: a3b4c1d4
 * =================================================================
 */
const summarizeStr = (str) => {
  let result = "";
  const store = {};

  // store 객체에 '문자열: 갯수' 의 형태로 저장합니다.
  for (let i = 0; i < str.length; i++) {
    if (store.hasOwnProperty(str[i])) {
      store[str[i]] += 1;
    } else {
      store[str[i]] = 1;
    }
  }

  // store 객체의 key들을 배열로 만듭니다.
  const keyArr = Object.keys(store);
  // key 배열을 순회하며 result에 문자열과 갯수의 순서로 더해줍니다.
  keyArr.forEach((key) => {
    result += key + store[key];
  });

  return result;
};
