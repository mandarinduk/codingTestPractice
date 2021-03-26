### 프로그래머스 정렬 Level 2 - H-Index

> #### 내가 푼 방법

```js
function solution(citations) {
  let answer = 0;

  for (let i = 0; i <= citations.length; i++) {
    const count = citations.filter((citation) => citation >= i).length;
    if (count === i) answer = count;
    if (i > count) {
      answer = i - 1;
      break;
    }
  }

  return answer;
}
```

- 문제에서 말하는 H-Index를 이해하는게 제일 어려웠다...☠️
- count 횟수만큼 인용된 논문이 몇 편(i) 있는지 찾는 방향으로 구현했다
- count는 인용된 횟수(citation)가 i 보다 큰 조건을 만족하는 수를 할당
- i 편과 횟수(count)가 같을 경우 count를 answer에 할당하여 return!
- i와 count가 같은 경우가 없을 경우 i 편이 횟수(count) 보다 커지기 직전의 i 값이 최대 횟수(count)이기 때문에 i를 answer에 할당하여 return!
  (ex. 4번(count) 이상 인용된 논문이 3편(i), 3번(count) 이상 인용된 논문이 4편(i)일 경우 H-Index는 3)

> #### 다른 사람의 풀이

```js
function solution(citations) {
  citations = citations.sort(sorting);
  var i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;

  function sorting(a, b) {
    return b - a;
  }
}
```

- 내림차순으로 citation을 정렬
- i에 +1을 해주는 이유는 0 편의 논문은 의미가 없기 때문에 1 편의 논문부터 시작
- 배열의 인덱스는 0부터 시작이기 때문에 그냥 i를 index로 사용
- 3편의 논문이 3번 이상 인용이 됐다면 H-Index는 3!!
- i + 1 편의 논문이 정렬한 citations 배열의 i 번째 보다 크다면 H-Index는 i가 된다
- 결국 i + 1편보다 큰 citations의 요소 중 가장 큰 index를 구하면 된다
- 만약 i가 4라면 5(i + 1)편의 논문이 배열의 5번째 값(citations[4])보다 크다는 의미는
  5편의 논문이 5번 이상 인용되지 않았다(즉, 4번 이하)이기 때문에, H-Index가 될 수 없다!!
