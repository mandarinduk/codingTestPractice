### Hash Level 3 - 베스트앨범

- 풀이 방법에 대한 접근법은 생각했으나, 실제 코드로 구현하지는 못했다
- 다른 사람의 풀이를 참고하여 구현했다
- 나중에 꼭 다시 풀어보기!!

```js
function solution(genres, plays) {
  /**
   * 1. 배열에 각 노래별 특징 정리
   * ex) [ {genre: "pop", "count": 800, idx: 1}, {...}, {...} ]
   */
  const songsArr = genres.map((genre, idx) => {
    return { genre: genre, count: plays[idx], idx: idx };
  });

  /**
   * 2. 장르별 총 플레이 횟수 정리
   * ex) [ {genre: "classic", "sum": 1250}, {genre: "pop", "sum": 2500} ]
   */
  const sumArr = [];
  songsArr.forEach((song) => {
    let genre = sumArr.find((el) => el.genre === song.genre);
    if (!genre) {
      sumArr.push({
        genre: song.genre,
        sum: song.count,
      });
    } else {
      genre.sum += song.count;
    }
  });

  /**
   * 3. 장르별 많이 플레이 된 순으로 정렬
   * ex) [ {genre: "pop", "sum": 2500}, {genre: "classic", "sum": 1250} ]
   */
  sumArr.sort((a, b) => b.sum - a.sum);

  /**
   * 4. 많이 플레이 된 장르-> 노래 -> 고유번호(낮은 순) 순으로 answer 배열에 해당 고유번호(idx) 입력
   * 장르에 속한 곳이 하나라면, 하나만 입력
   * ex) [4, 3, 0, 1]
   */
  const answer = [];
  sumArr.forEach((el) => {
    let song = songsArr.filter((song) => el.genre === song.genre);
    song.sort((a, b) => {
      if (a.count !== b.count) return b.count - a.count;
      // 노래 플레이 횟수가 같을 경우 낮은 고유번호 순으로 정렬
      return a.index - b.index;
    });
    answer.push(song[0].idx);
    if (song.length > 1) answer.push(song[1].idx);
  });

  return answer;
}
```
