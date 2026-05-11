function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach(([w, h]) => {
    const long = Math.max(w, h);
    const short = Math.min(w, h);

    if (long > maxWidth) maxWidth = long;
    if (short > maxHeight) maxHeight = short;
  });

  return maxWidth * maxHeight;
}
// 큰 값은 가로, 작은 값은 세로로 이동시킨다.
// 각 그룹에서 최대값을 갱신하여 최종적인 가로 x 세로 크기를 반환한다.
