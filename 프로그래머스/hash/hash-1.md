### 프로그래머스 해시 Level 1 - 완주하지 못한 선수

> #### 처음 풀이

```js
function solution(participant, completion) {
    var answer = '';
     let completionIndex;

     for (let i = 0; i < participant.length; i++) {
             if (completion.indexOf(participant[i]) === -1) {
                 return answer = participant[i];
             };
             completionIndex = completion.indexOf(participant[i])
             completion.splice(completionIndex, 1)
     }

    return answer;
```

반복문과 배열 메서드를 활용해서 구현했지만, 효율성 테스트에서 탈락..!!☠️

1. completion 배열에 participant가 없을 경우 answer에 할당하여 return
2. 동명이인일 경우를 생각하여, `completion.indexOf(participant[i])`가 0보다 큰 경우 completion 배열에서 participant[i]를 splice를 활용하여 삭제

> #### 두번째 풀이

```js
function solution(participant, completion) {
  var answer = "";
  let completionIndex;

  const participantObj = {};

  for (let i = 0; i < participant.length; i++) {
    if (!participantObj[participant[i]]) {
      participantObj[participant[i]] = 1;
    } else {
      participantObj[participant[i]] += 1;
    }
  }

  const completionObj = {};

  for (let i = 0; i < completion.length; i++) {
    if (!completionObj[completion[i]]) {
      completionObj[completion[i]] = 1;
    } else {
      completionObj[completion[i]] += 1;
    }
  }

  const participantObjKeyArr = Object.keys(participantObj);

  for (let i = 0; i < participantObjKeyArr.length; i++) {
    if (
      participantObj[participantObjKeyArr[i]] !=
      completionObj[participantObjKeyArr[i]]
    ) {
      return (answer = participantObjKeyArr[i]);
    }
  }

  return answer;
}
```

객체(key-value)를 활용하여 구현, 코드는 더 길고 복잡해지고 못생겨졌지만 테스트는 통과?! 😧

1. participant, completion Object를 만들어서 사람 이름을 key, 해당 이름을 가진 사람이 몇명인지를 value로 지정

2. participant Object Key를 배열로 만들어 순회하면서, 각 key 값에 대응하는 value를 비교하여 다를 경우 answer로 할당하여 return!

> #### 다른 사람의 풀이

```js
function solution(participant, completion) {
  /*
    for(let i in participant) {
        if(completion.includes(participant[i]) == false) return participant[i];
        completion.splice(completion.indexOf(participant[i]), 1);
    }
    */

  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
```

두 배열을 정렬하여, 앞에서부터 차례대로 비교
같지 않을 경우는 completion에 해당 사람이 없다는 의미!

** 다른사람의 풀이 보니깐 상당히 현타가 많이 온다.. 열심히 해야겠다! 제발!**
