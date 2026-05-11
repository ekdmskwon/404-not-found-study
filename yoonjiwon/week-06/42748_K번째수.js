function solution(array, commands) {
  return commands.map((command) => {
    const [i, j, k] = command;

    const sliced = array.slice(i - 1, j);

    sliced.sort((a, b) => a - b);

    return sliced[k - 1];
  });
}
//--풀이
// map을 사용하여 각 command에 대한 결과를 바로 배열로 반환한다.
// array의 i-1번째부터 j번째까지 slice(start, end)에서 end는 포함되지 않으므로 j를 그대로 사용한다.
// sort()로 요소를 문자열로 변환하여 정렬된 배열에서 k-1번째 숫자를 반환한다.
