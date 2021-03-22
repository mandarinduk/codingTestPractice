### 프로그래머스 해시 Lever 2 - 위장

> #### 풀이

```js
function solution(clothes) {
  var answer = 1;
  let category = "";
  const obj = {};

  for (let i = 0; i < clothes.length; i++) {
    category = clothes[i][1];

    if (!obj[category]) {
      obj[category] = clothes.filter((el) => el[1] === category).length + 1;
    }
  }

  const objKeys = Object.keys(obj);
  objKeys.forEach((el) => (answer *= obj[el]));

  return answer - 1;
}
```

- Object key, value 형태로 카테고리(key)마다 옷 종류의 수(value)를 구함
- 총 경우의 수 = ((각 카테고리의 옷 종류의 수 + 1)를 모두 곱함) - 1
- (각 카테고리 옷 종류의 수에 + 1) 을 하는 이유는 해당 카테고리를 착용하지 않을 경우도 있기 때문에
- 마지막에 -1 을 하는 이유는 모든 카테고리를 착용하지 않을 경우는 없기 때문에

> ### 다른 사람의 풀이

```js
function solution(clothes) {
  return (
    Object.values(
      clothes.reduce((obj, t) => {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
      }, {})
    ).reduce((a, b) => a * (b + 1), 1) - 1
  );
}
```

- Object key, value 형태로 카테고리 별로 종류의 수를 구하여 경우의 수를 구하는 접근 방법은 비슷했다
- 하지만 Array.reduce, Object.values 등 메서드를 활용하여 코드를 좀 더 간결하고 함수형 프로그래밍으로 작성하는 부분에서 차이가 났다
- 앞으로 나도 해당 부분을 신경써서 작성할 것!!
