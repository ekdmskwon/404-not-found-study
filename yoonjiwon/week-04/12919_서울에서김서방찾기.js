function solution(seoul) {
  const index_kim = seoul.indexOf("Kim");
  return `김서방은 ${index_kim}에 있다`;
}

// --풀이
// indexOf으로 Kim이 있는 요소를 찾아 템플릿 리터럴을 이용해 문자열에 삽입해 반환한다.