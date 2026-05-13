function solution(k, score) {
  const honor = [];
  const result = [];

  score.forEach((s) => {
    honor.push(s);

    honor.sort((a, b) => b - a);

    if (honor.length > k) {
      honor.pop();
    }

    result.push(honor[honor.length - 1]);
  });

  return result;
}

// --풀이
// honor 배열을 만들어서 명예의 전당에 올라갈 점수를 저장하고 score 배열을 순회하면서 각 점수를 honor 배열에 추가한다
// honor 배열을 내림차순으로 정렬하고 배열의 길이가 k보다 크면 가장 낮은 점수를 제거한다
// honor 배열의 마지막 요소가 현재 명예의 전당에서 가장 낮은 점수이므로, result 배열에 추가한다
// 최종적으로 result 배열을 반환
