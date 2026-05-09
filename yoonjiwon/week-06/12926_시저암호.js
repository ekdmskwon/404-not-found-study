function solution(s, n) {
  return s.replace(/[a-z]/gi, (c) => {
    const base = c <= "Z" ? 65 : 97;

    return String.fromCharCode(((c.charCodeAt(0) - base + n) % 26) + base);
  });
}

--풀이;
// 기준점을 결정해서 (대문자 'A'=65, 소문자 'a'=97)
// n만큼 더한 값이 범위를 벗어나면(26 이상) 0으로 돌아가게 계산한다.
// fromCharCode() 메서드를 사용하여 아스키 코드 값을 문자로 변환한다.
