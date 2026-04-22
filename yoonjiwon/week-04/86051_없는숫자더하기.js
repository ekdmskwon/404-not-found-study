function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}

// --풀이
// 0-9까지의 합은 45이므로 배열안에 요소의 총합을 빼면 없는 수의 합을 구할수 있다. reduce메소드를 이용해서 배열의 합을 구했다.