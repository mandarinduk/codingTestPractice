### 정렬 level 1 - K번째 수

```js
function solution(array, commands) {
  const answer = [];

  commands.forEach((command) => {
    // 구조분해 할당하여 가독성 up
    const [startIdx, endIdx, idx] = command;
    const temp = array.slice(startIdx - 1, endIdx).sort((a, b) => a - b);
    answer.push(temp[idx - 1]);
  });

  return answer;
}
```

- 가독성을 높이기 위해 command 배열을 구조분해 할당했음
- forEach 대신 map을 사용하여 새로운 배열을 만들어 return 했으면 굳이 temp라는 변수를 만들지 않아도 해결 가능하다
- 어떤 방식으로 구현하는게 더 효율적인지 좀 더 고민이 필요할 것 같다
